import React from "react";
import Carousel from "react-material-ui-carousel";
import MKBox from "components/MKBox";
import p1 from "assets/images/landscapes/l1.webp";
import p2 from "assets/images/landscapes/l2.webp";
import p3 from "assets/images/landscapes/l3.webp";
import p4 from "assets/images/landscapes/l4.webp";
import p5 from "assets/images/landscapes/l5.webp";

const portraitItems = [
  {
    landscapeImage: p1,
  },
  {
    landscapeImage: p2,
  },
  {
    landscapeImage: p3,
  },
  {
    landscapeImage: p4,
  },
  {
    landscapeImage: p5,
  },
];

function Landscape() {
  return (
    <MKBox component="header" position="relative" height="50vh" width="100%">
      <Carousel
        indicators={true}
        navButtonsAlwaysVisible={true}
        sx={{
          height: "50vh",
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
        {portraitItems.map((item, i) => (
          <MKBox
            key={i}
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100%"
            width="100%"
          >
            <img
              src={item.landscapeImage}
              alt={`Portrait ${i + 1}`}
              style={{
                maxHeight: "50vh",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          </MKBox>
        ))}
      </Carousel>
    </MKBox>
  );
}

export default Landscape;
