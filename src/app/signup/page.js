"use client";

import Image from "next/image";
import styles from "./page.module.css";
import SignupForm from "@/components/signupForm/signup";

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

const SignupPage = () => {
  return <div className={styles.signupPage}>
    <Background />
    <SignupForm />
  </div>;
};

export default SignupPage;
