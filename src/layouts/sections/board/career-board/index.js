import React, { useState } from "react";
import BaseLayout from "layouts/sections/components/BaseLayout";
import designImages from "assets/data/designImages.json"; // Adjust the path if necessary

// Import all images
import d1 from "assets/images/cmb/cmb1.webp";
import d2 from "assets/images/cmb/cmb2.webp";
import d3 from "assets/images/cmb/cmb3.webp";
import d4 from "assets/images/cmb/cmb4.webp";
import d5 from "assets/images/cmb/cmb5.webp";
import d6 from "assets/images/cmb/cmb6.webp";
import d7 from "assets/images/cmb/cmb7.webp";
import d8 from "assets/images/cmb/cmb8.webp";
import d9 from "assets/images/cmb/cmb9.webp";
import d10 from "assets/images/cmb/cmb10.webp";
import d11 from "assets/images/cmb/cmb11.webp";
import d12 from "assets/images/cmb/cmb12.webp";
import d13 from "assets/images/cmb/cmb13.webp";
import d14 from "assets/images/cmb/cmb14.webp";
import d15 from "assets/images/cmb/cmb15.webp";
import d16 from "assets/images/cmb/cmb16.webp";
import d17 from "assets/images/cmb/cmb17.webp";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

// Map image names to imported images
const imageMap = {
  "d1.webp": d1,
  "d2.webp": d2,
  "d3.webp": d3,
  "d4.webp": d4,
  "d5.webp": d5,
  "d6.webp": d6,
  "d7.webp": d7,
  "d8.webp": d8,
  "d9.webp": d9,
  "d10.webp": d10,
  "d11.webp": d11,
  "d12.webp": d12,
  "d13.webp": d13,
  "d14.webp": d14,
  "d15.webp": d15,
  "d16.webp": d16,
  "d17.webp": d17,
};

function CareerBoard() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleClickOpen = (image, title) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
    setSelectedTitle("");
  };

  return (
    <BaseLayout
      title="Inspirational design boards that illustrate the creative process, including mood boards, fabric swatches, and sketches."
      breadcrumb={[
        { label: "Work", route: "/sections/board/career-board" },
        { label: "Mood Board" },
      ]}
    >
      <Box sx={{ width: "100%", height: "100%", overflowY: "scroll", mx: "-2rem" }}>
        <ImageList variant="masonry" cols={2} gap={2}>
          {designImages.map((item, index) => {
            const imageUrl = imageMap[item.image];
            return (
              <ImageListItem key={index} onClick={() => handleClickOpen(imageUrl, item.title)}>
                <img
                  srcSet={`${imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${imageUrl}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          {selectedTitle}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {selectedImage && (
            <img src={selectedImage} alt={selectedTitle} style={{ width: "100%" }} />
          )}
        </DialogContent>
      </Dialog>
    </BaseLayout>
  );
}

export default CareerBoard;
