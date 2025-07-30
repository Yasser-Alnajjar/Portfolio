 
// import { Tilt } from 'react-tilt';
import { LuExternalLink, LuGithub } from 'react-icons/lu';
import Title from '../../components/Title';
import { projects } from '../../constants';

export default function Projects() {
  return (
    <section className="projects">
      <Title line>Projects</Title>
      <div className="row justify-start">
        {projects.map((project) => (
          <div
            className="col-12 col-sm-6 col-lg-4 overflow-hidden"
            key={project.id}
          > 
              <div className="card-img">
                <img
                  className="img-fluid"
                  src={typeof project.image === 'string' ? project.image : project.image.src}
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
                        rel="noreferrer"
                      >
                        <LuExternalLink size={22} />
                      </a>
                    )}
                    {project?.link?.github && (
                      <a
                        className="projects-link"
                        href={project.link.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LuGithub size={22} />
                      </a>
                    )}
                  </div>
                </div>
              </div> 
          </div>
        ))}
      </div>
    </section>
  );
}
