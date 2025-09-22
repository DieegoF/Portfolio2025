import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export function PortfolioFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Diego Fernandez</h3>
              <p className="text-muted-foreground max-w-sm">
                Frontend Developer Junior apasionado por crear experiencias web 
                increíbles y siempre aprendiendo nuevas tecnologías.
              </p>

              <div className="flex items-center space-x-4 pt-4">
              <Button asChild variant="ghost" size="sm" className="group">
                <a href="https://github.com/DieegoF" target="_blank" rel="noopener noreferrer">
                <Github  className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                </Button>

              <Button asChild variant="ghost" size="sm" className="group">
                <a href="https://www.linkedin.com/in/diegofernandezcai/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </Button>

              <Button asChild variant="ghost" size="sm" className="group">
              <a href="mailto:diegofernandez637@gmail.com">
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              </Button>
            </div>
          </div>

            {/* Quick Links */}
            <div className="space-y-4">
              
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold">Contacto</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>📧 diegofernandez637@gmail.com</div>
                <div>📱 1124555499</div>
                <div>📍 Buenos aires, Argentina</div>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600 dark:text-green-400">
                  Disponible para trabajar
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator />

   
      </div>
    </footer>
  );
}