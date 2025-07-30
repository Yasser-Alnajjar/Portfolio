import data from '../../assets/data.json';

import Experience from '../../components/sections/Experience';
import Hero from '../../components/sections/Hero';
import Projects from '../../components/sections/Projects';
import Skills from '../../components/sections/Skills';

export default function Home() {
  return (
    <section>
      <Hero />
      <Experience data={data.experience} />
      <Projects />
      <Skills />
    </section>
  );
}
