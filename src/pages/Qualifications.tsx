import { Qualifications } from "@/components/Qualifications";
import { StickyNav } from "@/components/StickyNav";
import { Footer } from "@/components/Footer";

const QualificationsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StickyNav />
      <Qualifications />
      <Footer />
    </div>
  );
};

export default QualificationsPage;
