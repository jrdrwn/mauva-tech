'use client';

import { useEffect, useState } from 'react';

export interface ArticleCardProps {
  id: string;
  title: string;
  summary: string;
  created_at: string;
  category: string;
  image: string;
}

export default function useArticles() {
  const [articles, setArticles] = useState<ArticleCardProps[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch('/api/articles');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setArticles(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, []);

  return articles;
}
