/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import DashboardCustomize from "@mui/icons-material/DashboardCustomize";
import Send from "@mui/icons-material/Send";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";

// Sections
import GarmentDevelopment from "layouts/sections/works/garment-development";
import DesignBoards from "layouts/sections/works/design-boards";
import CareerBoard from "layouts/sections/career-board";
import Photography from "layouts/sections/works/photography";
import Paintings from "layouts/sections/works/paintings";

const routes = [
  {
    name: "portfolio",
    icon: <Icon>work_history</Icon>,
    collapse: [
      {
        name: "Garment Development",
        description: "See all sections",
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
        name: "photography",
        description: "See all photos",
        route: "/sections/works/photography",
        component: <Photography />,
      },
      {
        name: "paintings & mixed media",
        description: "See all photos",
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
    name: "About Me",
    icon: <Icon>face_3</Icon>,
    collapse: [
      {
        name: "about us",
        description: "All about overview, quick start, license and contents",
        route: "/pages/landing-pages/about-us",
        component: <AboutUs />,
      },

      {
        name: "author",
        description: "See our colors, icons and typography",
        route: "/pages/landing-pages/author",
        component: <Author />,
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
