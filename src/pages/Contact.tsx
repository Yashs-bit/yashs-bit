import { SocialLinks } from "@/components/SocialLinks";
import { StickyNav } from "@/components/StickyNav";
import { Footer } from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StickyNav />
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default ContactPage;
