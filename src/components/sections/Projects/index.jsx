import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { Link } from 'react-router-dom';
import { LuExternalLink, LuGithub } from 'react-icons/lu';

import { projects } from '../../../constants';
import Title from '../../Title';

export default function Projects() {
  return (
    <section className="projects">
      <Title link="projects" name="View All">
        Projects
      </Title>
      <div className="row justify-start">
        {projects.slice(0, 6).map((project) => (
          <Tilt
            className="col-12 col-sm-6 col-lg-4 overflow-hidden"
            key={project.id}
          >
            <motion.div
              className="card border-gray-100"
              initial={{
                translateX: `${project.direction}%`,
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
              <div className="card-img">
                <img
                  className="img-fluid"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="card-body">
                <div className="flex justify-between">
                  <div className="card-title">{project.title}</div>
                  <div className="flex gap-2">
                    {/* <Link to={`/projects/${project.id}`}>
                      <LuFolder size={22} />
                    </Link> */}
                    {project?.link?.live && (
                      <Link
                        className="projects-link"
                        to={project.link.live}
                        target="_blank"
                      >
                        <LuExternalLink size={22} />
                      </Link>
                    )}
                    {project?.link?.github && (
                      <Link
                        className="projects-link"
                        to={project.link.github}
                        target="_blank"
                        replace
                      >
                        <LuGithub size={22} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
