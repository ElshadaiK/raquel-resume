import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import BaseLayout from "layouts/sections/components/BaseLayout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

// Import all images
import p1 from "assets/images/mdl/mdl1.jpeg";
import p2 from "assets/images/mdl/mdl2.jpeg";
import p3 from "assets/images/mdl/mdl3.jpeg";
import p4 from "assets/images/mdl/mdl4.jpeg";
import p5 from "assets/images/mdl/mdl5.jpeg";
import p6 from "assets/images/mdl/mdl6.jpeg";
import p7 from "assets/images/mdl/mdl7.jpeg";
import p8 from "assets/images/mdl/mdl8.jpeg";

const portraitItems = [
  { image: p1, title: "Portrait 1", description: "Description for Portrait 1" },
  { image: p2, title: "Portrait 2", description: "Description for Portrait 2" },
  { image: p3, title: "Portrait 3", description: "Description for Portrait 3" },
  { image: p4, title: "Portrait 4", description: "Description for Portrait 4" },
  { image: p5, title: "Portrait 5", description: "Description for Portrait 5" },
  { image: p6, title: "Portrait 6", description: "Description for Portrait 6" },
  { image: p7, title: "Portrait 7", description: "Description for Portrait 7" },
  { image: p8, title: "Portrait 8", description: "Description for Portrait 8" },
];

export default function MiniDesignLine() {
  const isLargeScreen = useMediaQuery("(min-width:600px)");

  return (
    <BaseLayout
      title="My Mini Design Line"
      breadcrumb={[
        { label: "Work", route: "/sections/works/mini-design-line" },
        { label: "Mini Design Line" },
      ]}
    >
      <Timeline
        position="alternate"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {portraitItems.map((item, index) => (
          <TimelineItem
            key={index}
            sx={{
              display: "flex",
              flexDirection: isLargeScreen ? (index % 2 === 0 ? "row" : "row-reverse") : "column",
            }}
          >
            {isLargeScreen ? (
              <TimelineOppositeContent
                sx={{ m: "auto 0", textAlign: index % 2 === 0 ? "right" : "left" }}
                align={index % 2 === 0 ? "right" : "left"}
                variant="body2"
                color="text.secondary"
              >
                {item.title}
              </TimelineOppositeContent>
            ) : null}
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot
                sx={{
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.5)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: "15%",
                    objectFit: "cover",
                    transition: "transform 0.7s",
                    "&:hover": {
                      transform: "scale(3)",
                    },
                  }}
                />
              </TimelineDot>
              <TimelineConnector />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "5rem", px: 2 }}>
              <Typography>{item.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </BaseLayout>
  );
}
