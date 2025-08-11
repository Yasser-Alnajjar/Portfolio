import {
  Navigation,
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
} from "@components";
import { supabase } from "@lib/supabaseClient";

export default async function Page() {
  const { data: heroData } = await supabase.from("hero").select("*");
  const { data: aboutData } = await supabase.from("about_me").select("*");
  const { data: skillsData } = await supabase.from("skills").select("*");
  const { data: additionalData } = await supabase
    .from("additional_skills")
    .select("*");
  const { data: projectsData } = await supabase.from("projects").select("*");
  const { data: experienceData } = await supabase
    .from("experience")
    .select("*");
  const { data: contactsData } = await supabase.from("contacts").select("*");

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section id="home" className="pt-24 pb-16 lg:pt-32">
        <Hero data={heroData?.[0]} />
      </section>
      <section id="about" className="py-16">
        <About data={aboutData as any} />
      </section>
      <section id="skills" className="py-16">
        <Skills
          data={{
            skills: skillsData as any,
            additional: additionalData as any,
          }}
        />
      </section>
      <section id="projects" className="py-16">
        <Projects projects={projectsData as any} />
      </section>

      <section id="experience" className="py-16">
        <Experience data={experienceData as any} />
      </section>

      <section id="contact" className="py-16">
        <Contact data={contactsData as any} />
      </section>
    </main>
  );
}
