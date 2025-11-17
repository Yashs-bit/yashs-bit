import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Skills", path: "/skills" },
  { label: "Qualifications", path: "/qualifications" },
  { label: "Projects", path: "/projects" },
  { label: "Connect", path: "/contact" },
];

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 glass glow-hover transition-all duration-300 hover:scale-110"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-primary" />
        ) : (
          <Menu className="h-6 w-6 text-primary" />
        )}
      </Button>

      {/* Side Panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 glass z-40 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-start justify-center h-full px-12 space-y-8">
          {menuItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={handleNavClick}
              className={`text-2xl font-semibold transition-all duration-300 hover:translate-x-2 glow-hover ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
              style={{
                animation: isOpen ? `fade-in 0.5s ease-out ${index * 0.1}s both` : "none",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 animate-fade-in"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};
