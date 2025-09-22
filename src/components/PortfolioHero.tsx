import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";


export function PortfolioHero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                👋 ¡Hola! Soy
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
               Diego
                <span className="block text-primary">Fernandez</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Developer Frontend Junior apasionado por crear experiencias web increíbles. 
                Especializado en React, JavaScript y diseño responsive.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/5491124555499?text=Hola,%20quiero%20más%20información." target="_blank" rel="noopener noreferrer">
            Contactar
            </a>

            </div>

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

          <div className="relative order-1 lg:order-2">
            <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/40 rounded-full animate-pulse delay-1000"></div>
              
              {/* Profile image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img src= "../img/perfil.jpg" alt="Diego Fernandez"  className="w-full h-full object-cover rounded-full" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}