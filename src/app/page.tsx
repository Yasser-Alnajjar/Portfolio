import { socialLinks } from '@/constants';
import ClientOnly from '@/components/ClientOnly';
import { Navbar } from '@/components';
import SideMenu from '@/components/SideMenu';
import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import data from '@/assets/data.json';

export default function Home() {
  return (
    <main className="relative">
      <ClientOnly>
        <Navbar />
        <SideMenu />
      </ClientOnly>
      
      {/* Left Social Links */}
      <aside className="fixed left-10 bottom-0 hidden lg:block">
        <ul className="flex flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-[90px] after:bg-gray after:mt-6">
          {socialLinks.map((link) => (
            <li key={link.id} className="transition-transform duration-300 ease-in-out hover:-translate-y-1.5 hover:text-danger">
              <a
                data-name={link.name}
                className="relative group"
                target="_blank"
                rel="noreferrer"
                href={link.href}
              >
                {link.icon}
                <span className="absolute left-1/2 -translate-x-1/2 -top-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out border border-danger px-2 py-1 rounded-md z-30 bg-white dark:bg-black text-danger">
                  {link.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </aside>
      
      {/* Right Email Link */}
      <div className="fixed right-10 bottom-0 hidden lg:block">
        <a 
          className="text-vertical mb-6 tracking-widest hover:text-danger transition-colors duration-300 after:content-[''] after:w-[1px] after:h-[90px] after:bg-gray after:block after:mx-auto after:mt-6"
          href="mailto:yasseralnajjar72@gmail.com"
        >
          yasseralnajjar72@gmail.com
        </a>
      </div>
      
      <section className="container mx-auto px-4 py-8">
        <Hero />
        <Experience data={data.experience} />
        <Projects />
        <Skills />
      </section>
    </main>
  );
}
