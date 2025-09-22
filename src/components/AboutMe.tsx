import { Card, CardContent } from "./ui/card";
import { GraduationCap, Coffee, Code, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutMe() {
  const facts = [
    {
      icon: Code,
      title: "Líneas de código escritas",
      value: "10,000+"
    },
    {
      icon: Coffee,
      title: "Tazas de café",
      value: "500+"
    },
    {
      icon: GraduationCap,
      title: "Cursos completados",
      value: "10+"
    },
    {
      icon: Heart,
      title: "Proyectos con amor",
      value: "Todos"
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Sobre mí
              </h2>
              <p className="text-lg text-muted-foreground">
                Soy un desarrollador frontend junior con una gran pasión por la tecnología 
                y el aprendizaje continuo. Mi viaje en la programación comenzó hace un año 
                y desde entonces no he parado de explorar nuevas tecnologías y frameworks.
              </p>
              <p className="text-lg text-muted-foreground">
                Me especializo en crear interfaces de usuario intuitivas y responsive 
                utilizando las últimas tecnologías web. Aunque soy junior, mi dedicación 
                y entusiasmo me impulsan a mejorar constantemente mis habilidades.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Lo que me motiva:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Resolver problemas complejos con código elegante</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Aprender nuevas tecnologías cada día</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Crear experiencias de usuario memorables</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Colaborar en proyectos que impacten positivamente</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2RpbmclMjB3b3Jrc3BhY2UlMjBzZXR1cHxlbnwxfHx8fDE3NTczMzgzNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mi espacio de trabajo"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {facts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <Card key={index} className="text-center p-4">
                    <CardContent className="space-y-2">
                      <Icon className="h-8 w-8 text-primary mx-auto" />
                      <div className="text-2xl font-bold">{fact.value}</div>
                      <div className="text-sm text-muted-foreground">{fact.title}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}