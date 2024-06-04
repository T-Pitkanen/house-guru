import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./signup.module.css";


const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const password = watch("password", "");

  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (data) => {
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setSuccessMessage("User created!");
        reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className={styles.signupContainer}>
      <form className={styles.signupForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formHeader}>
          <h1>Sign Up</h1>
        </div>
        <input
          placeholder="Username:"
          {...register("username", { required: true })}
        />
        {errors.username && <p>This field is required</p>}

        <input
          placeholder="Email:"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p>This field is required</p>}

        <input
          placeholder="Password:"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
        />
        {errors.password && <p>This field is required</p>}
        <input
          placeholder="Confirm Password:"
          type="password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === password || "The passwords do not match",
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        {successMessage && <p>{successMessage}</p>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default SignupForm;
