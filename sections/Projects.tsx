import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.webp";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.webp";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.webp";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import SectionHeader from "@/components/section-header";
import Card from "@/components/card";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "#",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "#",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "#",
    image: aiStartupLandingPage,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-World Results"
          title="Featured Projects"
          description="See how i transformed concepts into engaging digital experiences"
        />
        <div className="mt-10 flex flex-col gap-20 md:mt-20">
          {portfolioProjects.map((project, i) => (
            <Card
              key={crypto.randomUUID()}
              className="sticky px-8 pb-0 pt-8 md:px-10 md:pt-12 lg:px-20 lg:pt-16"
              style={{ top: `calc(64px + ${i * 40}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-sm font-bold uppercase tracking-widest text-transparent">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-xl md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="mt-4 border-t-2 border-white/5 md:mt-5" />
                  <ul className="mt-4 flex flex-col gap-4">
                    {project.results.map((res) => (
                      <li
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                        key={crypto.randomUUID()}
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{res.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white font-semibold text-gray-950 md:w-auto md:px-6">
                      Visit Live Site
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    className="-mb-4 mt-8 md:-mb-0 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
