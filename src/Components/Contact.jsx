import "../Styles/Contact.scss";

import { MapContainer, Marker, TileLayer } from "react-leaflet";

import React from "react";
import { send } from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [sender_name, set_sender_name] = useState("");
  const [sender_email, set_sender_email] = useState("");
  const [message, set_message] = useState("");

  const handleName = (e) => {
    set_sender_name(e.target.value);
  };
  const handleEmail = (e) => {
    set_sender_email(e.target.value);
  };
  const handleMessage = (e) => {
    set_message(e.target.value);
  };

  const sendMail = (e) => {
    e.preventDefault();
    send(
      process.env.REACT_APP_service_ID,
      process.env.REACT_APP_template_ID,
      { sender_name, sender_email, message },
      process.env.REACT_APP_user_ID
    )
      .then((response) => {
        console.log(
          "Message sent successfully",
          response.status,
          response.text
        );
      })
      .catch((err) => {
        console.log("Faild", err);
      });
    set_message("");
    set_sender_email("");
    set_sender_name("");
  };

  return (
    <div className="Contact_Container" id="Contact">
      <h2>Contact me</h2>

      <div className="Contact">
        <div className="Contact_Left_Section">
          <p>
            I am interested in freelance opportunies - especially ambitious or
            large projects. However, if you have other reuest or quesetions,
            don't hesitate to contact me using below form.
          </p>
          <form className="contact_form" onSubmit={sendMail}>
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              value={sender_name}
              onChange={handleName}
              required
              placeholder="your Name"
            />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              value={sender_email}
              onChange={handleEmail}
              required
              placeholder="your email"
            />
            <label>Message</label>
            <textarea
              name="message"
              value={message}
              required
              onChange={handleMessage}
              placeholder="your message"
            />
            <button type="submit">Send mail</button>
          </form>
        </div>

        <div className="Right_Section">
          <MapContainer
            center={[30.033333, 31.233334]}
            zoom={8}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[30.033333, 31.233334]}></Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};
export default Contact;
