import Abuaslam from "../pictures/abuaslam.jpg";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const About = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_v4wfkns",
        "template_eqndqqg",
        form.current,
        "yawSHDZmdPliwrdeN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <section className="about">
      <div className="picture">
        <h2>Contact Us </h2>
      </div>

      <div className="info"></div>

      <div className="contact">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="  Full Name"
            className="input"
          />
          <input
            type="email"
            name="user_email"
            placeholder="   Email"
            className="input"
          />
          <textarea name="message" placeholder="Type your message here ..." />
          <input type="submit" value="Send" className="button" onClick={(e) => e.target.classList.add("btnonclick")} />
        </form>
      </div>
    </section>
  );
};

export default About;
