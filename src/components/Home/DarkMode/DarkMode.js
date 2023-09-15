import React from "react";

const DarkMode = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-[#0c0c0c]">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1
              data-aos="fade-up"
              data-aos-duration="3000"
              className="text-4xl text-slate-600 font-bold"
            >
              aero{" "}
              <span className="text-6xl text-lime-600 font-bold ">
                {" "}
                Dark Mode
              </span>
            </h1>
            <p data-aos="fade-right" data-aos-duration="3000" className="py-6">
              Who does not love Black or Dark Theme on their smartphones? Primo
              ZX4 has in built Dark Mode that changes your third party apps as
              well.
            </p>
            <button
              data-aos="fade-down"
              data-aos-duration="3000"
              className="btn bg-lime-600 border-none rounded-none text-white hover:bg-lime-700"
            >
              Switch
            </button>
          </div>
          <img
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="3000"
            alt=""
            src="https://waltonbd.com/micro-site/zx4/images/zx4/zx4-feature-Special2-2.webp"
            className="lg:max-w-2xl  "
          />
        </div>
      </div>
    </div>
  );
};

export default DarkMode;
