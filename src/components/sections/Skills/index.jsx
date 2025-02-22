 
import { skills } from '../../../constants';
import Title from '../../Title';

export default function Skills() {
  return (
    <section className="skills my-10">
      <Title>Skills</Title>
      <div className="row pb-4 overflow-hidden">
        {skills.map((skill) => (
          <div className="col-12 col-sm-6 col-lg-4" key={skill.id}>
            <div
              className="card border-gray-100">
              <div className="card-body">
                <div className="card-title">{skill.skill}</div>
                <div className="card-img">{skill.icon}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
