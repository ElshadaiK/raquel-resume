const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

export default [
  {
    title: "Works",
    description:
      "Explore the diverse range of sections, each meticulously crafted to showcase the breadth and depth of my work in fashion design.",
    items: [
      {
        image: `${imagesPrefix}/headers.jpg`,
        name: "Garment Development",
        description:
          "A showcase of innovative garment development projects, highlighting the process from initial concept to final product.",
        count: 10,
        route: "/sections/works/garment-development",
      },
      {
        image: `${imagesPrefix}/features.jpg`,
        name: "Design Boards",
        description:
          "Inspirational design boards that illustrate the creative process, including mood boards, fabric swatches, and sketches.",
        count: 14,
        route: "/sections/works/design-boards",
      },
      {
        image: `${imagesPrefix}/pricing.jpg`,
        name: "Paintings",
        description:
          "A collection of paintings that reflect my artistic influences and exploration of color, texture, and form.",
        count: 8,
        route: "/sections/works/paintings",
      },
      {
        image: `${imagesPrefix}/faq.jpg`,
        name: "Photography",
        description:
          "Captivating photographs that capture the essence of my designs, emphasizing the interplay between fashion and nature.",
        count: 1,
        route: "/sections/works/photography",
      },
    ],
  },
  {
    title: "Boards",
    description:
      "Over 10 components that can be combined to create comprehensive presentations of various design projects and concepts.",
    items: [
      {
        image: `${imagesPrefix}/navbars.jpg`,
        name: "Career Mood Board",
        description:
          "Curated career mood boards showcasing key milestones and future aspirations within the fashion industry.",
        count: 4,
        route: "/sections/board/career-board",
      },
    ],
  },
];
