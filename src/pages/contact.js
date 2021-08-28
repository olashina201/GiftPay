import React from "react";
import Contact from "../components/Contact/Contact";
import NavBar from "../components/Navbar/NavBar";

const ContactUs = ({ cart }) => {
  return (
    <>
      <NavBar cart={cart} />
      <Contact />
    </>
  );
};

export default ContactUs;
