import React from "react";

const SelfieBanner = () => {
  return (
    <div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="3000"
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/FHP5BvL/vecteezy-happy-young-woman-in-white-shirts-and-shorts-sitting-at-sand-7773084-180.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1
              data-aos="fade-up"
              data-aos-duration="3000"
              className="text-4xl text-slate-600 font-bold"
            >
              the AERO{" "}
              <span className="text-6xl text-amber-600 font-bold ">
                {" "}
                Moments
              </span>
            </h1>
            <p data-aos="fade-up" data-aos-duration="3000" className="mb-5">
              For the first time, users can take portraits without having to
              switch to Portrait mode. When there’s a person, dog, or cat in the
              frame, or when a user taps to focus, AERO automatically captures
              depth information
            </p>
            <button
              data-aos="fade-down"
              data-aos-duration="3000"
              className="btn bg-amber-600 border-none rounded-none text-white hover:bg-amber-700"
            >
              MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfieBanner;
