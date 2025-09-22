import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Nexus</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-primary transition-colors">
              Features
            </a>
            <a href="#testimonials" className="hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button>Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-3">
              <a href="#features" className="hover:text-primary transition-colors">
                Features
              </a>
              <a href="#testimonials" className="hover:text-primary transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-3 border-t">
                <Button variant="ghost" size="sm">Sign In</Button>
                <Button size="sm">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}