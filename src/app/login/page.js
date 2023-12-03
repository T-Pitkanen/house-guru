"use client";

import Image from "next/image";
import styles from "./page.module.css";
import LoginForm from "@/components/loginForm/login";

const Background = () => {
  return (
    <div className={styles.backgroundImage}>
      <Image
        src="/background.jpg"
        alt="background image for contact page"
        width={300}
        height={300}
      />
    </div>
  );
};

const LoginPage = () => {
  return <div className={styles.loginPage}>
    <Background />
    <LoginForm />
  </div>;
};

export default LoginPage;
