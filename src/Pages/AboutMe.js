import React from "react";
import { faker } from "@faker-js/faker";

const AboutMe = () => {
  return (
    <section>
      <h2>About Me</h2>
      {faker.lorem.paragraph(10)}
    </section>
  );
};

export default AboutMe;
