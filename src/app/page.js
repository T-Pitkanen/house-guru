"use client";

import Search from "@/components/search/search";
import Card from "@/components/articleCard/articleCard";
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.page}>
      <Search />
      <Card />
    </div>
  );
}
