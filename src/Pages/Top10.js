import React from "react";
import { faker } from "@faker-js/faker";

const Top10 = () => {
  const images = [];

  for (let i = 0; i < 10; i++) {
    images.push(faker.image.nature(i+600));
  }

  return (
    <section>
      <h2>Top 10</h2>
      {images.map((image, index) => (
        <img key={index} src={image} alt="landscape" />
      ))}
    </section>
  );
};

export default Top10;
