import { Skills } from "@/components/Skills";
import { SideRail } from "@/components/SideRail";
import { Footer } from "@/components/Footer";

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SideRail />
      <Skills />
      <Footer />
    </div>
  );
};

export default SkillsPage;
