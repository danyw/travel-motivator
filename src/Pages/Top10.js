import React from "react";
import { faker } from "@faker-js/faker";

const Top10 = () => {
  const images = [];

  for (let i = 0; i < 10; i++) {
    images.push(faker.image.nature(i+600));
  }

  return (
    <section>
      <h2 className="text-3xl font-bold text-zinc-600 pb-2" >Top 10</h2>
      <div className="flex flex-row gap-1 flex-wrap justify-center"> 
      {images.map((image, index) => (
        <img key={index} src={image} alt="landscape" />
      ))}
      </div>
    </section>
  );
};

export default Top10;
