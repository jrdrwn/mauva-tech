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
  }
  });
  return c.json(data);
});

export const GET = handle(app);
export const POST = handle(app);
