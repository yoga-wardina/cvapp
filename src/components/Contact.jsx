import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="contact">
      <section id="contact" className="testing">
        <h1>CONTACT ME</h1>
        <FontAwesomeIcon icon={faCoffee} />
      </section>
    </div>
  );
}
export default Contact;
