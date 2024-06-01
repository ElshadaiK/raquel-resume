import Icon from "@mui/material/Icon";

// @mui icons
import DashboardCustomize from "@mui/icons-material/DashboardCustomize";
import Send from "@mui/icons-material/Send";

// Pages
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";

// Sections
import GarmentDevelopment from "layouts/sections/works/garment-development";
import DesignBoards from "layouts/sections/works/design-boards";
import CareerBoard from "layouts/sections/board/career-board";
import Photography from "layouts/sections/works/photography";
import Paintings from "layouts/sections/works/paintings";
import MiniDesignLine from "layouts/sections/works/mini-design-line";

const routes = [
  {
    name: "portfolio",
    icon: <Icon>work_history</Icon>,
    collapse: [
      {
        name: "Garment Development",
        description: "See all garments",
        route: "/sections/works/garment-development",
        component: <GarmentDevelopment />,
      },

      {
        name: "design boards",
        description: "See all designs",
        route: "/sections/works/design-boards",
        component: <DesignBoards />,
      },
      {
        name: "mini design line",
        description: "See mini designs",
        route: "/sections/works/mini-design-line",
        component: <MiniDesignLine />,
      },

      {
        name: "photography",
        description: "See all photos",
        route: "/sections/works/photography",
        component: <Photography />,
      },
      {
        name: "paintings & mixed media",
        description: "See all paintings",
        route: "/sections/works/paintings",
        component: <Paintings />,
      },
    ],
  },
  {
    name: "Career Mood Board",
    icon: <DashboardCustomize />,
    route: "/sections/board/career-board",
    component: <CareerBoard />,
  },
  {
    name: "About",
    icon: <Icon>face_3</Icon>,
    collapse: [
      {
        name: "Me",
        description: "See our colors, icons and typography",
        route: "/pages/landing-pages/author",
        component: <Author />,
      },
      {
        name: "developer",
        description: "All about overview, quick start, license and contents",
        href: "https://elshadaik.github.io",
      },
    ],
  },
  {
    name: "Contact",
    icon: <Send />,
    route: "/pages/landing-pages/contact-us",
    component: <ContactUs />,
  },
];

export default routes;
