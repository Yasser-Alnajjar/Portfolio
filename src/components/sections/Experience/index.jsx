import Title from '../../Title';
import Badge from '../../ui/Badge';

export default function Experience({ data }) {
  return (
    <section className="experience">
      <Title>Experience</Title>
      {data.map((item) => (
        <div className="card border-gray-100" key={item.id}>
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="flex align-center gap-2">
                <span>{item.company.job_title}</span>
                <Badge variant="danger">At</Badge>
                <span>{item.company.name}</span>
                <Badge variant="danger">In</Badge>
                <span>{item.company.location}</span>
              </h2>
              <div className="flex align-center gap-2">
                {item.company.start_date}{' '}
                <Badge rounded="circle" variant="danger">
                  -
                </Badge>
                {item.company.present ? 'Present' : item.company.end_date}
              </div>
            </div>
            <div>
              {item.projects.map((project) => (
                <div key={project.id}>
                  {project.production.length > 0 && (
                    <Title className="my-4">Production</Title>
                  )}
                  {project.production.map((link) => (
                    <ul key={link.id}>
                      <li className="ps-2 mb-2">
                        <a className="underline fs-5" href={link}>
                          {link}
                        </a>
                      </li>
                    </ul>
                  ))}
                  {project.developed.length > 0 && (
                    <Title className="my-4">Developed</Title>
                  )}
                  {project.developed.map((link) => (
                    <ul key={link.id}>
                      <li className="ps-2 mb-2">
                        <a className="underline fs-5" href={link}>
                          {link}
                        </a>
                      </li>
                    </ul>
                  ))}
                  {project.enhanced.length > 0 && (
                    <Title className="my-4">Enhanced</Title>
                  )}
                  {project.enhanced.map((link) => (
                    <ul key={link.id}>
                      <li className="ps-2 mb-2">
                        <a className="underline fs-5" href={link}>
                          {link}
                        </a>
                      </li>
                    </ul>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
