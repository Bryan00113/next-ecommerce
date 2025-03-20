import * as React from "react";
// Replace the problematic import with a local implementation
// import { cn } from "@/lib/utils";
// Local implementation of the cn utility function
const cn = (...classes: any[]) => classes.filter(Boolean).join(" ");

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Brain, Heart, LineChart, Medal, Settings, User } from "lucide-react";

const navigationItems = [
  {
    title: "Mi Perfil",
    icon: User,
    description: "Gestiona tu perfil y preferencias personales",
    links: [
      {
        title: "Información Personal",
        href: "#",
        description: "Actualiza tus datos personales",
      },
      {
        title: "Preferencias",
        href: "#",
        description: "Configura tus preferencias de aplicación",
      },
      {
        title: "Seguridad",
        href: "#",
        description: "Gestiona tu contraseña y seguridad",
      },
    ],
  },
  {
    title: "Análisis Mental",
    icon: Brain,
    description: "Explora tus patrones de pensamiento y mejora tu resiliencia",
    links: [
      {
        title: "Evaluaciones",
        href: "#",
        description: "Realiza test de bienestar mental",
      },
      {
        title: "Patrones",
        href: "#",
        description: "Identifica patrones de pensamiento",
      },
      {
        title: "Recomendaciones",
        href: "#",
        description: "Recibe consejos personalizados",
      },
    ],
  },
  {
    title: "Bienestar Emocional",
    icon: Heart,
    description: "Herramientas y técnicas para gestionar tus emociones",
    links: [
      {
        title: "Meditaciones",
        href: "#",
        description: "Ejercicios de meditación guiada",
      },
      {
        title: "Diario",
        href: "#",
        description: "Registra tus emociones diarias",
      },
      {
        title: "Técnicas",
        href: "#",
        description: "Aprende técnicas de gestión emocional",
      },
    ],
  },
  {
    title: "Progreso",
    icon: LineChart,
    description: "Visualiza tu avance y logros personales",
    links: [
      {
        title: "Estadísticas",
        href: "#",
        description: "Visualiza tu progreso en gráficos",
      },
      {
        title: "Histórico",
        href: "#",
        description: "Revisa tu historial de actividades",
      },
      {
        title: "Objetivos",
        href: "#",
        description: "Establece y sigue tus objetivos",
      },
    ],
  },
];

export function NavigationBar() {
  return (
    <NavigationMenu className="  glass-morphism rounded-lg  mx-auto max-w-4xl">
      <NavigationMenuList>
        {navigationItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuTrigger className="flex items-center gap-2 text-white hover:text-dashboard-purple transition-colors duration-300 ease-in-out">
              <item.icon className="w-4 h-4" />
              <span>{item.title}</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="glass-morphism border-white/10">
              <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-dashboard-purple/30 to-dashboard-purple/10 p-6 no-underline outline-none focus:shadow-md transition-all duration-300 ease-in-out hover:from-dashboard-purple/40 hover:to-dashboard-purple/20"
                      href="#"
                    >
                      <item.icon className="h-8 w-8 text-white mb-2" />
                      <div className="mb-2 mt-4 text-lg font-medium text-white">
                        {item.title}
                      </div>
                      <p className="text-sm leading-tight text-white/70">
                        {item.description}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                {item.links.map((link) => (
                  <ListItem
                    key={link.title}
                    title={link.title}
                    href={link.href}
                  >
                    {link.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 ease-in-out hover:bg-dashboard-purple/10 hover:text-dashboard-purple focus:bg-dashboard-purple/10",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium text-white group-hover:text-dashboard-purple transition-colors duration-300 ease-in-out">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-white/70 transition-colors duration-300 ease-in-out">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
