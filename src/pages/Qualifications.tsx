import { Qualifications } from "@/components/Qualifications";
import { SideRail } from "@/components/SideRail";
import { Footer } from "@/components/Footer";

const QualificationsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SideRail />
      <Qualifications />
      <Footer />
    </div>
  );
};

export default QualificationsPage;
