import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import Contactbuyer from "./Contactbuyer";

const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Contactbuyer />
    </div>
  );
};

export default BookingForm;
