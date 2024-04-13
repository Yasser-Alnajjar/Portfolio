import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../../../../constants';

export default function ProjectDetails() {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    setData(...projects.filter((item) => item.id === +id));
  }, [id]);

  return (
    <div>
      {data.id}
      {data.title}
    </div>
  );
}
