import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "diegofernandez637@gmail.com",
      link: "mailto:diegofernandez637@gmail.com"
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+541124555499",
      link: "tel:+541124555499"
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Buenos Aires",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com",
      username: "@Diegofernandez"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://linkedin.com",
      username: "Diego Fernandez"
    },
    {
      icon: Twitter,
      label: "Twitter",
      link: "https://twitter.com",
      username: "@Diegofernandez"
    }
  ];

  return (
    <section id="contacto" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            ¡Hablemos!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estoy buscando nuevas oportunidades y proyectos interesantes. 
            Si tienes una idea o simplemente quieres conversar, ¡contacta conmigo!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Envíame un mensaje</CardTitle>
              <CardDescription>
                Completa el formulario y te responderé lo antes posible
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre
                  </label>
                  <Input id="name" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Asunto
                </label>
                <Input id="subject" placeholder="¿Sobre qué quieres hablar?" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                  rows={1}
                />
              </div>
              
              <Button asChild className="w-full">
              <a href="mailto:diegofernandez637@gmail.com?subject=Consulta&body=Hola, quisiera más información.">
              <Send className="h-4 w-4 mr-2" />
              Enviar mensaje
              </a>
              </Button>

            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Información de contacto</CardTitle>
                <CardDescription>
                  También puedes contactarme directamente por estos medios
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.link}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{contact.label}</div>
                        <div className="text-sm text-muted-foreground">
                          {contact.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            
            {/* Availability Status */}
            <Card className="border-green-200 dark:border-green-800">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="font-medium text-green-700 dark:text-green-300">
                      Disponible para trabajar
                    </div>
                    <div className="text-sm text-green-600 dark:text-green-400">
                      Buscando oportunidades como Frontend Developer Junior
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}