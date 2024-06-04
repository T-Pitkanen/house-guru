"use client";

import Image from "next/image";
import styles from "./page.module.css";

const AdminPage = () => {
  return (
    <div className={styles.adminPage}>
      <div className={styles.pageContainer}>
        <div className={styles.pageWrapper}>
          <h1>Logged In!</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
