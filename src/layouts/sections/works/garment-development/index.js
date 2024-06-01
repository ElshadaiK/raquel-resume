/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// GarmentDevelopment page components
import HeaderOne from "layouts/sections/works/garment-development/components/GarmentCarousel";

// GarmentDevelopment page components code

function GarmentDevelopment() {
  return (
    <BaseLayout
      title="This slideshow showcases my work in the class Computer Applications in Digital Design. I used Adobe Photoshop to create textile swatches and design collages. I used Adobe Illustrator to create the technical sketches and final clothes designs. I have named this project Tsuru no Ongaeshi after the Japanese folklore. I was inspired by the book, 'Six Crimson Cranes,' by Elizabeth Lim. My garment development project shows the process of my target market, inspiration, textile swatches, clothing designs, cost sheet, a mock SketchUp store, and promotional postcard."
      breadcrumb={[
        { label: "Work", route: "/sections/works/garment-development" },
        { label: "Garment Development" },
      ]}
    >
      <View height="40rem">
        <HeaderOne />
      </View>
    </BaseLayout>
  );
}

export default GarmentDevelopment;
