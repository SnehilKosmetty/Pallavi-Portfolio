import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Pallavi Sanjay Nile | Software Developer Portfolio</title>
        <meta
          name="description"
          content="Software Developer specializing in full-stack development. Master's student with 3 internships and 10+ projects. Building scalable applications with React, Node.js, and cloud technologies."
        />
        <meta
          name="keywords"
          content="software developer, full stack developer, React developer, Node.js, portfolio, computer science, internship"
        />
              <link rel="canonical" href="https://PallaviSanjayNile.dev" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Pallavi Sanjay Nile",
            jobTitle: "Software Developer",
              url: "https://github.com/Pallavi-Nile-98",
            sameAs: [
              "https://github.com/Pallavi-Nile-98",
              "https://www.linkedin.com/in/pallavi-nile/",
            ],
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
