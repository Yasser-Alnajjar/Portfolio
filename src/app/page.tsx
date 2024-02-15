import { Resume } from "@/components/Resume";
import Image from "next/image";
import image from "@/app/assets/image.jpg";
import { socialLinks } from "@/data/socialLinks";

export default async function Home() {
  return (
    <section className="grid  grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 place-content-between items-center">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
          I&#39;m Yasser Abdel Twab Al-Najjar <br />
          React & Next Front-End Developer
        </h1>
        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            I&#39;ve been immersed in programming for 4 years now, and the
            process of creating something meaningful is satisfying to me. My
            passion for programming drives me to constantly improve my skills to
            achieve the ultimate goal of becoming a skilled web developer.
            Currently, I&#39;m mostly working with react typescript & next
            typescript, my GitHub shows projects that are either clones of or
            directly affected by those discoveries. I aspire to contribute to
            the development of something impactful, even if it is on a modest
            scale. I&#39;ve done my best on my GitHub, where you can find most
            of my work.
          </p>
        </div>
        <Resume />
      </div>
      <div className="flex justify-start items-center lg:items-end order-first lg:order-last flex-col">
        <Image
          src={image}
          alt="Yasser"
          className="object-contain"
          width={400}
        />
        <section className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mt-10">
          <div className="flex items-center justify-center gap-5">
            {socialLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                target="_blank"
                className="text-2xl gap-2 flex flex-col items-center text-zinc-500 hover:text-zinc-900 transition dark:hover:text-primary-foreground"
              >
                {link.icon}
                <span className="text-sm">{link.name}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
