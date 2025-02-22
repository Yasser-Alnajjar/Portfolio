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
            </div>
            <p className="my-4">{item.company.description}</p>
            <h3 className="text-lg font-semibold mb-4">
              Benefits & Responsibilities
            </h3>
            <ul className="list-disc list-inside">
              {item?.benefits &&
                item?.benefits.length > 0 &&
                item?.benefits.map((benefit) => (
                  <li className="mb-2" key={benefit}>
                    {benefit}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
