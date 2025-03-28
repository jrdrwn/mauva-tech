import { Hono } from 'hono';
import { handle } from 'hono/vercel';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

app.get('/projects', (c) => {
  const data = [
    {
      title: 'E-commerce Platform for Fashionista',
      description:
        'A fully customized e-commerce solution designed to boost sales and enhance user experience.',
      image:
        'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=niclas-illg-FJ5e_2f96h4-unsplash.jpg&w=640',
      category: 'Website',
    },
    {
      title: 'E-commerce Platform for Fashionista',
      description:
        'A fully customized e-commerce solution designed to boost sales and enhance user experience.',
      image:
        'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=niclas-illg-FJ5e_2f96h4-unsplash.jpg&w=640',
      category: 'Website',
    },
    {
      title: 'HealthTrack Mobile App',
      description:
        'A health monitoring app that empowers users to take control of their wellness journey.',
      image:
        'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=niclas-illg-FJ5e_2f96h4-unsplash.jpg&w=640',
      category: 'Mobile',
    },
    {
      title: 'HealthTrack Mobile App',
      description:
        'A health monitoring app that empowers users to take control of their wellness journey.',
      image:
        'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=niclas-illg-FJ5e_2f96h4-unsplash.jpg&w=640',
      category: 'Mobile',
    },
    {
      title: 'Corporate Website for GreenTech Solutions',
      description:
        "A modern and informative website that reflects the company's commitment to sustainability.",
      image:
        'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=niclas-illg-FJ5e_2f96h4-unsplash.jpg&w=640',
      category: 'UI/UX',
    },
    {
      title: 'Corporate Website for GreenTech Solutions',
      description:
        "A modern and informative website that reflects the company's commitment to sustainability.",
      image:
        'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=niclas-illg-FJ5e_2f96h4-unsplash.jpg&w=640',
      category: 'UI/UX',
    },
  ];
  return c.json(data);
});

export const GET = handle(app);
export const POST = handle(app);

