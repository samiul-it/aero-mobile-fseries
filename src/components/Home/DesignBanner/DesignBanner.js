import React from "react";

const DesignBanner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-[#e6e6e6]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="3000"
            alt=""
            src="https://i.ibb.co/L1jvJzD/vecteezy-realistic-3d-black-smartphone-mockup-collection-isolated-on-6687294.jpg"
            className="lg:max-w-2xl  "
          />
          <div>
            <h1
              data-aos="fade-up"
              data-aos-duration="3000"
              className="text-4xl text-slate-600 font-bold"
            >
              unleash the{" "}
              <span className="text-6xl text-lime-600 font-bold "> AERO</span>
            </h1>
            <p data-aos="fade-right" data-aos-duration="3000" className="py-6">
              The powerful combination of Lingxi AI algorithm and Lingxi antenna
              brings a better communication experience. Achieve more stable
              network connections in weak signal scenarios such as high-speed
              trains, subways, elevators, and garages.
            </p>
            <button
              data-aos="fade-down"
              data-aos-duration="3000"
              className="btn bg-lime-600 border-none rounded-none text-white hover:bg-lime-700"
            >
              See Specification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignBanner;
