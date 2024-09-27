import Title from '../../Title';
import Badge from '../../ui/Badge';

export default function Experience({ data }) {
  return (
    <section className="experience">
      <Title>Experience</Title>
      {data.map((item) => (
        <div className="card border-gray-100 mb-3" key={item.id}>
          <div className="card-body">
            <div className="flex justify-between flex-wrap">
              <h2>
                {item.company.name}
                <span className="text-sm text-danger">
                  {' - '} {item.company.job_type}
                </span>
              </h2>
              <div className="flex align-center gap-2">
                {item.company.start_date} {' - '}
                {item.company.present ? 'Present' : item.company.end_date}
              </div>
            </div>
            <div className="flex flex-wrap align-center gap-2 my-2">
              <span>{item.company.job_title}</span>
              <Badge variant="danger" size="xs">
                At
              </Badge>
              <span>{item.company.name}</span>
              <Badge variant="danger" size="xs">
                In
              </Badge>
              <span>{item.company.location}</span>
            </div>
            <div>
              <h3 className="my-2">Projects</h3>
              <ul>
                {item?.projects &&
                  item?.projects.length > 0 &&
                  item?.projects.map((project) => (
                    <li className="mb-2" key={project}>
                      <a className="underline text-base" href={project}>
                        {project}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
