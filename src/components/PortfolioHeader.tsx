import { Button } from "./ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export function PortfolioHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setIsDark(darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Diego Fernandez</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#sobre-mi" className="hover:text-primary transition-colors">
              Sobre mí
            </a>
            <a href="#contacto" className="hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
           
            <Button variant="ghost" size="sm" onClick={toggleDarkMode}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
           
              <Button asChild className="cursor-pointer hover:bg-inherit transition-none">
              <a href="/public/cv/cv.pdf" download="mi-cv.pdf">
              Descargar CV
              </a>
              </Button>

          </div> 

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={toggleDarkMode}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
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
              <a href="#inicio" className="hover:text-primary transition-colors">
                Inicio
              </a>
              <a href="#sobre-mi" className="hover:text-primary transition-colors">
                Sobre mí
              </a>
              <a href="#contacto" className="hover:text-primary transition-colors">
                Contacto
              </a>
              <div className="pt-3 border-t">
                <a href="public/cv/cv.pdf" download="mi-cv.pdf" className="w-full" >
                <Button size="sm" className="w-full">Descargar CV</Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}