export interface RouteConfig {
  label: string;
  components: { name: string; path: string }[];
}

export const routeConfig: RouteConfig[] = [
  {
    label: "All Components",
    components: [
      { name: "Analog Clock", path: "/components/analog-clock" },
      { name: "Loading", path: "/components/loading" },
      { name: "Linked Particles", path: "/components/linked-particles" },
      { name: "Sparkles", path: "/components/sparkles" },
      { name: "Animated Menu", path: "/components/animated-menu" },
      { name: "Intro Banner", path: "/components/intro-banner" },
    ],
  },
];
