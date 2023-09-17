import React from "react";

const AndroidVersion = () => {
  return (
    <div>
      <h1
        data-aos="fade-up"
        data-aos-duration="2000"
        className="text-3xl lg:text-8xl text-slate-600 font-bold text-center mb-5  "
      >
        superCharged with{" "}
        <span className="text-5xl lg:text-9xl text-lime-600 font-bold ">
          {" "}
          AERO 13
        </span>
      </h1>
      <div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://websetnet.net/wp-content/uploads/2022/05/LI20Android201320Featured-2.png.webp)",
          }}
        >
          <div className="hero-overlay bg-opacity-0"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidVersion;
