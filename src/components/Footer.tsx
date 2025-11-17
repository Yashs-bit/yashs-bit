export const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Yash | <span className="gradient-text font-semibold">AI × IoT × Embedded Systems</span>
        </p>
      </div>
    </footer>
  );
};
