"use client";

import Search from "@/components/search/search";
import Card from "@/components/articleCard/articleCard";
import styles from "./page.module.css"
import Slider from "@/components/carousel/carousel";

export default function Home() {
  return (
    <div className={styles.page}>
      <Search />
      <Card />
      <Slider />
    </div>
  );
}
