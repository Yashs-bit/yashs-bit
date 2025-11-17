import { Projects } from "@/components/Projects";
import { SideRail } from "@/components/SideRail";
import { Footer } from "@/components/Footer";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SideRail />
      <Projects />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
