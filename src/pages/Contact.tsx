import { SocialLinks } from "@/components/SocialLinks";
import { FloatingOrb } from "@/components/FloatingOrb";
import { Footer } from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingOrb />
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default ContactPage;
