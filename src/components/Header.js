import React from "react";

const Header = () => {
  return (
    <header className="relative">
      <img
        className="  mx-auto object-cover md:scale-x-150"
        src="https://todaygeneralnews.com/wp-content/uploads/2022/05/travel-photography-course.jpg"
        alt="header"
        max-width="800px"
      />

      <h1 className="absolute text-3xl md:text-6xl py-1 top-3 left-1/2 -translate-x-1/2 text-black opacity-60 font-bold  ">
        Travel Motivator
      </h1>
    </header>
  );
};

export default Header;
