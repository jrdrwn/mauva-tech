import { useEffect, useState } from "react";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

export default function useProjects() {
  const [projects, setProjects] = useState<ProjectCardProps[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  return projects;
}
