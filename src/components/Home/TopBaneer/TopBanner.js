import React from "react";

const TopBanner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            alt=""
            src="https://i.ibb.co/0JgSvXd/vecteezy-realistic-3d-black-smartphone-isometric-mockup-isolated-on-11491090.jpg"
            className="lg:max-w-2xl mt-5  "
          />
          <div>
            <h1
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-4xl text-slate-600 font-bold"
            >
              brand new{" "}
              <span className="text-6xl text-lime-600 font-bold "> AERO</span>
            </h1>
            <p data-aos="fade-right" data-aos-duration="2000" className="py-6">
              Always a classic, always innovative. Extreme axial symmetry,
              consistent with the same origin.Concentric design, breaking
              boundaries and exploring new aesthetics.
            </p>
            <button
              data-aos="fade-down"
              data-aos-duration="2000"
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

export default TopBanner;
