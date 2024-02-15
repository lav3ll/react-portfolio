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
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder mb-0">
          <span className="text-gradient d-inline">Contact Me</span>
        </h1>
      </div>
      <div className="container contact__container">
        <div className="contact__options d-flex flex-column gap-3">
          <article className="contact__option bg-light p-4 rounded text-center border transition">
            <MdOutlineEmail className="contact__option-icon fs-3 mb-3 text-primary mb-3" />
            <h4>Email</h4>
            <h6>Lavell.francis@hotmail.com</h6>
            <a href="mailto:lavell.francis@hotmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option bg-light p-4 rounded text-center border transition">
            <BsWhatsapp className="contact_option mt-3 text-primary mb-3 fs-4" />
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
        {/*END OF CONTACT OPTIONS */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="d-flex flex-column gap-3"
        >
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
