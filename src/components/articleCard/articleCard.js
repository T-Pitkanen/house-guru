"use client";
import Image from "next/image";

const Card = ({ title, content, button, image }) => {
  return (
    <div className="blog-card">
      <h2>{title}</h2>
      <p>{content}</p>
      <button>{button}</button>
      <Image src={image} alt={title} width={300} height={300} />
    </div>
  );
};

export default Card;
