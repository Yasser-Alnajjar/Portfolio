import { Tilt } from 'react-tilt';
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
            <div
              className="card border-gray-100">
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
                      <a
                        className="projects-link"
                        href={project.link.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LuExternalLink size={22} />
                      </a>
                    )}
                    {project?.link?.github && (
                      <a
                        className="projects-link"
                        href={project.link.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LuGithub size={22} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
