import React, { useState } from "react";
import BaseLayout from "layouts/sections/components/BaseLayout";

import paintingImages from "assets/data/paintingImages.json"; // Adjust the path if necessary

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import p1 from "assets/images/paintings/p1.webp";
import p2 from "assets/images/paintings/p2.webp";
import p3 from "assets/images/paintings/p3.webp";
import p4 from "assets/images/paintings/p4.webp";
import p5 from "assets/images/paintings/p5.webp";
import p6 from "assets/images/paintings/p6.webp";
import p7 from "assets/images/paintings/p7.webp";
import p8 from "assets/images/paintings/p8.webp";
import p9 from "assets/images/paintings/p9.webp";
import p10 from "assets/images/paintings/p10.webp";
import p11 from "assets/images/paintings/p11.webp";

const imageMap = {
  "p1.webp": p1,
  "p2.webp": p2,
  "p3.webp": p3,
  "p4.webp": p4,
  "p5.webp": p5,
  "p6.webp": p6,
  "p7.webp": p7,
  "p8.webp": p8,
  "p9.webp": p9,
  "p10.webp": p10,
  "p11.webp": p11,
};

function Paintings() {
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
      title="A collection of paintings that reflect my artistic influences and exploration of color, texture, and form."
      breadcrumb={[
        { label: "Work", route: "/sections/works/paintings" },
        { label: "Paintings and Mixed Media" },
      ]}
    >
      <Box sx={{ width: "100%", height: "100%", overflowY: "scroll" }}>
        <ImageList variant="quilted" cols={4} gap={2}>
          {paintingImages.map((item, index) => {
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

export default Paintings;
