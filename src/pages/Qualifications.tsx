import { Qualifications } from "@/components/Qualifications";
import { FloatingOrb } from "@/components/FloatingOrb";
import { Footer } from "@/components/Footer";

const QualificationsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingOrb />
      <Qualifications />
      <Footer />
    </div>
  );
};

export default QualificationsPage;
