import React from "react";
import { Modal, Card, Button } from "@material-ui/core";

const PropertyModal = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Learn More
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="learn-more"
        aria-describedby="property-details"
      >
        <Card
          style={{
            width: "50vw",
            height: "60vh",
            margin: "10vh auto",
            padding: "5%",
          }}
        >
          <h2>
            {props.address}
            <br />
            {props.city}, {props.state} {props.zip}
          </h2>
          <p>Lorem Ipsum, Property Deets</p>
          <Button
            variant="text"
            color="secondary"
            size="small"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button variant="contained" color="primary" size="large">
            Inquire
          </Button>
        </Card>
      </Modal>
    </div>
  );
};

export default PropertyModal;
