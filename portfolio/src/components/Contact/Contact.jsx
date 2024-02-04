import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_nsrr2sq",
      "template_m6clibd",
      form.current,
      "5e7JKX5dyg9HGcA6E"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5 className="fw-bolder">Get In Touch</h5>
      <p className="lead fw-normal text-muted mb-0">Contact Me</p>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h5>Lavell.francis@hotmail.com</h5>
            <a href="mailto:lavell.francis@hotmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp contact__option-icon />
            <h4>WhatsApp</h4>
            <h5>07894543667</h5>
            <a
              href="https://api.whatsapp.com/send/?phone=447894543667"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className="">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="form-control"
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
