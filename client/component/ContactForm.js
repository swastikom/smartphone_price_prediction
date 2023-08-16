"use client";
import React, { useState } from "react";
import styles from "@/styles/contact.module.css";
import { BsCupHotFill } from "react-icons/bs";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setErrorMessage("Please fill all the fields!");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid Gmail address.");
      return;
    }

    // Define the mailOptions object
    const mailOptions = {
      from: "your@gmail.com", // Your Gmail address
      to: "swastikdhar18@gmail.com", // The recipient email address
      subject: `New Contact Form Submission - ${formData.subject}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Message: ${formData.message}
      `,
    };

    try {
      // const response = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });

      // Compose email URL
    const email = "swastikom23@gmail.com";
    const subject = `${formData.subject}`;
    const body = `${formData.message}%0D%0A`; // %0D%0A used for New Line
    const emailUrl = `mailto:${email}?subject=${subject}&body=${body}`;

    // Open email URL in new tab
    window.open(emailUrl);
    
      // if (response.ok) {
      //   console.log("Email sent successfully");
      //   setErrorMessage("");
      //   resetForm(); // You can also reset the form fields here if needed
      // } else {
      //   console.error("Error sending email");
      //   setErrorMessage("* An error occurred while sending the email");
      // }
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("* An error occurred while sending the email");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.ContactForm}>
      <h2>
        Let's talk <BsCupHotFill />
      </h2>
      <div>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name..."
          required
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email (e.g - example@gmail.com)"
          required
        />
      </div>
      <div>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject..."
          required
        />
      </div>
      <div>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message..."
          required
        />
      </div>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
