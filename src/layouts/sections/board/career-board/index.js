import React, { useState } from "react";
import BaseLayout from "layouts/sections/components/BaseLayout";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Modal from "@mui/material/Modal";
import designImages from "assets/data/designImages.json"; // Adjust the path if necessary

// Import all images
import d1 from "assets/images/designImages/d1.webp";
import d2 from "assets/images/designImages/d2.webp";
import d3 from "assets/images/designImages/d3.webp";
import d4 from "assets/images/designImages/d4.webp";
import d5 from "assets/images/designImages/d5.webp";
import d6 from "assets/images/designImages/d6.webp";
import d7 from "assets/images/designImages/d7.webp";
import d8 from "assets/images/designImages/d8.webp";
import d9 from "assets/images/designImages/d9.webp";
import d10 from "assets/images/designImages/d10.webp";
import d11 from "assets/images/designImages/d11.webp";
import d12 from "assets/images/designImages/d12.webp";
import d13 from "assets/images/designImages/d13.webp";
import d14 from "assets/images/designImages/d14.webp";

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
};

function DesignBoards() {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleOpen = (image) => {
    setCurrentImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentImage(null);
  };

  return (
    <BaseLayout
      title="Inspirational design boards that illustrate the creative process, including mood boards, fabric swatches, and sketches."
      breadcrumb={[
        { label: "Work", route: "/sections/works/design-boards" },
        { label: "Design Boards" },
      ]}
    >
      <MKBox className="design-board-container">
        {designImages.map((item, index) => {
          const imageUrl = imageMap[item.image];
          return (
            <MKBox
              key={index}
              className={`design-board-item design-board-item-${index % 14}`}
              onClick={() => handleOpen(imageUrl)}
            >
              <img src={imageUrl} alt={item.title} className="design-board-image" />
              <MKBox className="design-board-overlay">
                <MKTypography variant="h5" color="white">
                  {item.title}
                </MKTypography>
                <MKTypography variant="body2" color="white">
                  {item.description}
                </MKTypography>
              </MKBox>
            </MKBox>
          );
        })}
      </MKBox>
      <Modal open={open} onClose={handleClose}>
        <MKBox className="modal-content">
          {currentImage && <img src={currentImage} alt="Full Design" className="modal-image" />}
          {currentImage && (
            <MKTypography variant="body2" color="white" className="modal-description">
              {designImages.find((item) => imageMap[item.image] === currentImage).description}
            </MKTypography>
          )}
        </MKBox>
      </Modal>
    </BaseLayout>
  );
}

export default DesignBoards;
