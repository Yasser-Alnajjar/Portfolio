'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { projects } from '../../../../constants';

interface Project {
  id: number;
  title: string;
  [key: string]: unknown;
}

export default function ProjectDetails() {
  const params = useParams();
  const id = params?.id as string;
  const [data, setData] = useState<Project | null>(null);
  
  useEffect(() => {
    if (id) {
      const project = projects.find((item) => item.id === +id);
      setData(project || null);
    }
  }, [id]);

  return (
    <div>
      {data?.id}
      {data?.title}
    </div>
  );
}
