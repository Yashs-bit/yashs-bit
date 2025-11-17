import { SocialLinks } from "@/components/SocialLinks";
import { HamburgerMenu } from "@/components/HamburgerMenu";
import { Footer } from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HamburgerMenu />
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default ContactPage;
