import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <img src={logo} alt="Skado Logo" className="h-8" />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Support
            </a>
          </nav>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/login">
              <Button variant="ghost" className="h-10 px-4 sm:h-11 sm:px-6 py-3">Login</Button>
            </Link>
            <Link to="/login">
              <Button variant="hero" size="default" className="h-10 px-4 sm:h-11 sm:px-6 py-3">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};