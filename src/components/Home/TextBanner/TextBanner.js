import React from "react";

const TextBanner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-gradient-to-r from-zinc-950">
        <div className="hero-content text-center">
          <div className="lg:max-w-5xl">
            <h1
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="3000"
              className="lg:text-8xl text-5xl font-bold"
            >
              Rebirth of aesthetics through concerted efforts
            </h1>
            <p
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="3000"
              className="py-6 text-2xl font-bold text-lime-600 "
            >
              Always a classic, always innovative. Extreme axial symmetry,
              consistent with the same origin. Concentric design, breaking
              boundaries and exploring new aesthetics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBanner;
