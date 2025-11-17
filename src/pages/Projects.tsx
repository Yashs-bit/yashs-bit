import { Projects } from "@/components/Projects";
import { HamburgerMenu } from "@/components/HamburgerMenu";
import { Footer } from "@/components/Footer";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HamburgerMenu />
      <Projects />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
