import { HamburgerMenu } from "@/components/HamburgerMenu";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Qualifications } from "@/components/Qualifications";
import { Projects } from "@/components/Projects";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HamburgerMenu />
      <Hero />
      <Skills />
      <Qualifications />
      <Projects />
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default Index;
