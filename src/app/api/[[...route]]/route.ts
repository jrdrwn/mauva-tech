import { Hono } from 'hono';
import { handle } from 'hono/vercel';

import prisma from '../../../../prisma/index';

const app = new Hono().basePath('/api');

app.get('/projects', async (c) => {
  const data = await prisma.projects.findMany({
    select: {
      title: true,
      category: true,
      description: true,
      image: true,
      link: true,
      created_at: true,
    },
  });
  return c.json(data);
});

app.get('/articles', async (c) => {
  const data = await prisma.articles.findMany({
    select: {
      id: true,
      title: true,
      summary: true,
      created_at: true,
      category: true,
      image: true,
    },
    orderBy: {
      created_at: 'desc',
    },
  });

  return c.json(data);
});

app.get('/articles/:id', async (c) => {
  const { id } = c.req.param();

  const data = await prisma.articles.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return c.json(data);
});

app.post('/messages', async (c) => {
  const { first_name, last_name, subject, email, message } = await c.req.json();

  const data = await prisma.messages.create({
    data: {
      first_name,
      last_name,
      subject,
      email,
      message,
      created_at: new Date(),
      updated_at: new Date(),
    },
  });

  if (!data) {
    return c.json({
      status: 'error',
      message: 'Message not sent',
    });
  }

  return c.json({
    status: 'success',
    message: 'Message sent successfully',
  });
});

export const GET = handle(app);
export const POST = handle(app);

declare global {
  interface BigInt {
    toJSON(): string;
  }
}

BigInt.prototype.toJSON = function () {
  return this.toString();
};
