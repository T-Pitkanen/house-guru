import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import styles from "./login.module.css";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginError, setLoginError] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid username or password");
        }
        return response.json();
      })
      .then((data) => {
        window.location.href = "/loggedin";
        localStorage.setItem("token", data.token);
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formHeader}>
          <h1>Log In</h1>
        </div>
        <input
          placeholder="Username:"
          {...register("username", { required: true })}
        />
        {errors.username && <p>This field is required</p>}
        <input
          placeholder="Email:"
          {...register("email", { required: true })}
        />
        {errors.email && <p>This field is required</p>}

        <input
          placeholder="Password:"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && <p>This field is required</p>}
        {loginError && <p>{loginError}</p>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
