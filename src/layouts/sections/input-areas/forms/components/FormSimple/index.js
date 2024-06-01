import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function FormSimple() {
  const [checked, setChecked] = useState(true);

  const handleChecked = () => setChecked(!checked);

  return (
    <MKBox component="section" py={12} sx={{ backgroundColor: "rgba(244, 246, 248, 0.9)" }}>
      <Container>
        <Grid
          container
          item
          justifyContent="center"
          xs={12}
          lg={8}
          mx="auto"
          textAlign="center"
          mb={4}
        >
          <MKTypography variant="h3" mb={1} fontWeight="bold">
            Contact Us
          </MKTypography>
          <MKTypography variant="body1" color="textSecondary">
            I would love to hear from you! Please fill out the form below and I will get in touch
            with you shortly.
          </MKTypography>
        </Grid>
        <Grid container item xs={12} lg={8} sx={{ mx: "auto" }}>
          <MKBox
            width="100%"
            component="form"
            method="post"
            autoComplete="off"
            p={4}
            borderRadius="10px"
            boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
            sx={{ backgroundColor: "white" }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <MKInput
                  variant="standard"
                  label="First Name"
                  fullWidth
                  sx={{ borderRadius: "5px" }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MKInput
                  variant="standard"
                  label="Last Name"
                  fullWidth
                  sx={{ borderRadius: "5px" }}
                />
              </Grid>
              <Grid item xs={12}>
                <MKInput
                  variant="standard"
                  type="email"
                  label="Email Address"
                  fullWidth
                  sx={{ borderRadius: "5px" }}
                />
              </Grid>
              <Grid item xs={12}>
                <MKInput
                  variant="standard"
                  label="Your Message"
                  multiline
                  fullWidth
                  rows={6}
                  sx={{ borderRadius: "5px" }}
                />
              </Grid>
              <Grid item xs={12} display="flex" alignItems="center">
                <Switch checked={checked} onChange={handleChecked} />
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  ml={1}
                  sx={{ cursor: "pointer", userSelect: "none" }}
                  onClick={handleChecked}
                >
                  I agree to the&nbsp;
                </MKTypography>
                <MKTypography
                  component="a"
                  href="#"
                  variant="button"
                  fontWeight="bold"
                  color="primary"
                >
                  Terms and Conditions
                </MKTypography>
              </Grid>
            </Grid>
            <Grid container item justifyContent="center" xs={12} mt={4}>
              <MKButton
                type="submit"
                variant="gradient"
                color="primary"
                fullWidth
                sx={{ borderRadius: "5px", py: 1.5 }}
              >
                Send Message
              </MKButton>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FormSimple;
