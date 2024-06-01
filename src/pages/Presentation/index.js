import React, { useEffect, useRef } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import routes from "routes";
import footerRoutes from "footer.routes";
import raquelImage from "assets/images/raquel.webp";
import vineVideo from "assets/images/vine.mp4";
import "./Presentation.css";

function Presentation() {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollPosition / maxScroll;
      const video = videoRef.current;
      if (video) {
        const duration = video.duration || 1; // Avoid division by zero
        video.currentTime = duration * scrollPercentage;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "Buy me a coffee",
          color: "info",
        }}
        sticky
      />
      <div className="background-video-container">
        <video ref={videoRef} className="background-video" muted autoPlay loop>
          <source src={vineVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <MKBox
        minHeight="80vh"
        width="100%"
        sx={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={10} justifyContent="center" alignItems="center">
            <Grid container item xs={12} alignItems="center">
              <Grid item xs={12} md={6} className="text-container">
                <MKTypography
                  variant="h2"
                  color="primary"
                  textAlign="center"
                  px={{ xs: 6, lg: 12 }}
                  mt={1}
                >
                  Hi! This is Raquel
                </MKTypography>
                <MKTypography
                  variant="body1"
                  color="primary"
                  textAlign="center"
                  px={{ xs: 6, lg: 12 }}
                  mt={1}
                >
                  I study at Iowa State University, Majoring in Apparel Merchandising and Design
                  with a Minor in Textiles
                </MKTypography>
              </Grid>
              <Grid item xs={12} md={6} display="flex" justifyContent="center">
                <MKBox
                  component="img"
                  src={raquelImage}
                  alt="Raquel Rosburg"
                  width="50vh"
                  height="50vh"
                  borderRadius="50%"
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: "rgba(195, 177, 225, 0.3)",
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information />
        <DesignBlocks />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
