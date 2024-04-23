// Centralize route and meta data
const affix = "| Gyles Fohl Portfolio";

export const routeData = {
  home: {
    name: "Home",
    route: "/",
    title: `Home ${affix}`,
    description: "",
  },
  about: {
    name: "About",
    route: "/about",
    title: `About ${affix}`,
    description: ``,
  },
  projects: {
    name: "Projects",
    route: "/projects",
    title: `Projects ${affix}`,
    description: ``,
  },
  cv: {
    name: "Resume",
    route: "/cv",
    title: `Resume ${affix}`,
    description: ``,
  },
};

// routeData used in Navigation
export const navigationData = [
  routeData.home,
  //routeData.about,
  //routeData.projects,
  routeData.cv,
];
