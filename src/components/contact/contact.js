import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./contact.module.css";
import Image from "next/image";
import { set } from "mongoose";

const Background = () => {
  return (
    <div className={styles.backgroundImage}>
      <Image
        src="/contact-bg.jpg"
        alt="background image for contact page"
        width={300}
        height={300}
      />
    </div>
  );
};



const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();


  const [message, setMessage] = useState('')

  const onSubmit = async (data) => {
    const response = await fetch('/api/Messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (response.ok) {
      console.log('Data saved successfully');
      reset();
      console.log(data);
      setMessage('Sent!')
      setTimeout(() => {
        setMessage('Submit');
      }, 5000);
    } else {
      console.error('Error saving data');
    }
  };

  // const onSubmit = (data) => console.log(data);
  // console.log(errors);

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formHeader}>
          <h2>Contact Us</h2>
          <hr />
          <p>
            We are here to help you and answer any questions you may have needed
            to have.{" "}
          </p>{" "}
          <p>
            Please fill out the contact form below and one of our experienced
            agents will get back to you as soon as possible.
          </p>
        </div>{" "}
        <input
          type="text"
          placeholder="First name*"
          {...register("firstName", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Last name*"
          {...register("lastName", { required: true, maxLength: 100 })}
        />
        <input
          type="email"
          placeholder="Email*"
          {...register("email", { required: true })}
        />
        <input
          type="tel"
          placeholder="Number*"
          {...register("number", { required: true })}
        />
        <textarea
          rows="4"
          className={styles.message}
          placeholder="Your Message...*"
          {...register("message", { required: true, max: 250 })}
        />
        <input type="submit" onSubmit={onSubmit} value={message || 'Submit'}/>
      </form>
      
      
    </div>
  );
};


/*
const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.address}>
        <p>(+45) 12 34 56 </p>
        <p>info@housegururealty.com</p>
        <p>123 Main Street, Cityville, 56789</p>
      </div>
    </div>
  );
}; */

const Contact = () => {
  return (
    <>
      <Background />
      <ContactForm />
      {/* <ContactInfo /> */}
    </>
  );
};

export default Contact;
