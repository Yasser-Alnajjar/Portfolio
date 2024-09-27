import { motion } from 'framer-motion';
import { skills } from '../../../constants';
import Title from '../../Title';

export default function Skills() {
  return (
    <section className="skills my-10">
      <Title>Skills</Title>
      <div className="row pb-4 overflow-hidden">
        {skills.map((skill) => (
          <motion.div className="col-12 col-sm-6 col-lg-4" key={skill.id}>
            <motion.div
              className="card border-gray-100"
              initial={{
                translateX: `${skill.direction}%`,
                zIndex: -2,
                visibility: 'hidden',
              }}
              whileInView={{
                translateX: '0',
                zIndex: 1,
                visibility: 'visible',
              }}
              transition={{ duration: 1.5 }}
            >
              <div className="card-body">
                <div className="card-title">{skill.skill}</div>
                <div className="card-img">{skill.icon}</div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
