import { Qualifications } from "@/components/Qualifications";
import { HamburgerMenu } from "@/components/HamburgerMenu";
import { Footer } from "@/components/Footer";

const QualificationsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HamburgerMenu />
      <Qualifications />
      <Footer />
    </div>
  );
};

export default QualificationsPage;
