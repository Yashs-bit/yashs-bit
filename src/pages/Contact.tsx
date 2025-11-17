import { SocialLinks } from "@/components/SocialLinks";
import { SideRail } from "@/components/SideRail";
import { Footer } from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SideRail />
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default ContactPage;
