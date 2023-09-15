import React from "react";

const Ui = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-[#3665e7]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            data-aos="fade-down"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="3000"
            alt=""
            src="https://assets.materialup.com/uploads/c9743fe2-c218-4020-9034-ff1e27636537/preview.jpg"
            className="lg:max-w-2xl  "
          />
          <div>
            <h1
              data-aos="fade-up"
              data-aos-duration="3000"
              className="text-4xl text-slate-200 font-bold"
            >
              the{" "}
              <span className="text-6xl text-white   font-bold ">
                {" "}
                AERO UI 4.0
              </span>
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
              Download APPS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ui;
