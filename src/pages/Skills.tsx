import { Skills } from "@/components/Skills";
import { HamburgerMenu } from "@/components/HamburgerMenu";
import { Footer } from "@/components/Footer";

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HamburgerMenu />
      <Skills />
      <Footer />
    </div>
  );
};

export default SkillsPage;
