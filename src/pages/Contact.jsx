import React from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <div>
      <Helmet>
        <title>MUET Portal | Contact</title>
        <meta name="description" content="Contact Mehran University of Engineering & Technology" />
      </Helmet>
      <h1>Contact MUET</h1>
      <p>Email: info@muet.edu.pk</p>
      <p>Phone: +92-22-9212031</p>
    </div>
  );
}
