import {
  Navigation,
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
  Footer,
} from "@components";
import { supabase } from "@lib/supabaseClient";

export const revalidate = 0;

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

  const hero = heroData?.[0];
  const location = contactsData
    ?.find((c) => c.title?.toLowerCase() === "location")
    ?.value?.split(",")
    .slice(-2)
    .join(",")
    .trim();

  return (
    <main className="min-h-screen bg-background">
      <Navigation cv_url={hero?.cv_url} />

      <section id="home" className="pt-16">
        <Hero
          data={hero}
          showcase={(projectsData ?? []).filter((p) => p.featured)}
          location={location}
        />
      </section>
      <section id="work" className="border-t border-border py-24 lg:py-32">
        <Projects projects={projectsData as any} />
      </section>
      <section id="about" className="border-t border-border py-24 lg:py-32">
        <About data={aboutData as any} />
      </section>
      <section
        id="experience"
        className="border-t border-border py-24 lg:py-32"
      >
        <Experience data={experienceData as any} />
      </section>
      <section id="skills" className="border-t border-border py-24 lg:py-32">
        <Skills
          data={{
            skills: skillsData as any,
            additional: additionalData as any,
          }}
        />
      </section>
      <section id="contact" className="border-t border-border py-24 lg:py-32">
        <Contact data={contactsData as any} cv_url={hero?.cv_url} />
      </section>

      <Footer name={hero?.name} />
    </main>
  );
}
