import React from "react";
import Carousel from "react-material-ui-carousel";
import MKBox from "components/MKBox";
import bgImage1 from "assets/images/garmentImages/g1.webp";
import bgImage2 from "assets/images/garmentImages/g2.webp";
import bgImage3 from "assets/images/garmentImages/g3.webp";
import bgImage4 from "assets/images/garmentImages/g4.webp";
import bgImage5 from "assets/images/garmentImages/g5.webp";
import bgImage6 from "assets/images/garmentImages/g6.webp";
import bgImage7 from "assets/images/garmentImages/g7.webp";
import bgImage8 from "assets/images/garmentImages/g8.webp";
import bgImage9 from "assets/images/garmentImages/g9.webp";
import bgImage10 from "assets/images/garmentImages/g10.webp";
import bgImage11 from "assets/images/garmentImages/g11.webp";
import bgImage12 from "assets/images/garmentImages/g12.webp";
import bgImage13 from "assets/images/garmentImages/g13.webp";
import bgImage14 from "assets/images/garmentImages/g14.webp";
import bgImage15 from "assets/images/garmentImages/g15.webp";
import bgImage16 from "assets/images/garmentImages/g16.webp";
import bgImage17 from "assets/images/garmentImages/g17.webp";
import bgImage18 from "assets/images/garmentImages/g18.webp";
import bgImage19 from "assets/images/garmentImages/g19.webp";
import bgImage20 from "assets/images/garmentImages/g20.webp";

const items = [
  {
    garmentImage: bgImage1,
  },
  {
    garmentImage: bgImage2,
  },
  {
    garmentImage: bgImage3,
  },
  {
    garmentImage: bgImage4,
  },
  {
    garmentImage: bgImage5,
  },
  {
    garmentImage: bgImage6,
  },
  {
    garmentImage: bgImage7,
  },
  {
    garmentImage: bgImage8,
  },
  {
    garmentImage: bgImage9,
  },
  {
    garmentImage: bgImage10,
  },
  {
    garmentImage: bgImage11,
  },
  {
    garmentImage: bgImage12,
  },
  {
    garmentImage: bgImage13,
  },
  {
    garmentImage: bgImage14,
  },
  {
    garmentImage: bgImage15,
  },
  {
    garmentImage: bgImage16,
  },
  {
    garmentImage: bgImage17,
  },
  {
    garmentImage: bgImage18,
  },
  {
    garmentImage: bgImage19,
  },
  {
    garmentImage: bgImage20,
  },
];
function HeaderOne() {
  return (
    <MKBox component="header" position="relative" height="100vh" width="100%">
      <Carousel
        indicators={true}
        navButtonsAlwaysVisible={true}
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        indicatorContainerProps={{
          style: {
            position: "absolute",
            bottom: 10,
            textAlign: "center",
            width: "100%",
          },
        }}
        navButtonsProps={{
          style: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: 0,
            margin: 0,
            padding: 10,
          },
        }}
        navButtonsWrapperProps={{
          style: {
            bottom: 10,
            top: "unset",
          },
        }}
      >
        {items.map((item, i) => (
          <MKBox
            key={i}
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            width="100%"
            sx={{
              backgroundImage: `url(${item.garmentImage})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
      </Carousel>
    </MKBox>
  );
}

export default HeaderOne;
