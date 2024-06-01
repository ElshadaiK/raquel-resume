import React from "react";
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";
import routes from "routes";
import backgroundImage from "assets/images/vine.jpg"; // Replace with your background image path
import "./ContactUs.css";

function ContactUs() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "https://www.creative-tim.com/product/material-kit-react",
            label: "Buy me a coffee",
            color: "info",
          }}
        />
      </MKBox>
      <MKBox
        className="form-container"
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <FormSimple />
      </MKBox>
    </>
  );
}

export default ContactUs;
