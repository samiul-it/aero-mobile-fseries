import React from "react";

const MobileCameraBanner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="3000"
            alt=""
            src="https://i.ibb.co/qr5DZSQ/beautiful-girl-stands-near-walll-with-leaves-samsung-galaxys20ultra-cosmicgrey-portrait.png"
            className="lg:max-w-md  "
          />
          <div>
            <h1
              data-aos="fade-up"
              data-aos-duration="3000"
              className="text-4xl text-slate-600 font-bold"
            >
              the AERO{" "}
              <span className="text-6xl text-lime-600 font-bold ">
                {" "}
                Display
              </span>
            </h1>
            <p data-aos="fade-right" data-aos-duration="3000" className="py-6">
              he colors are inspired by the earth's color card, and the colorful
              mountains and rivers are reproduced in the palm of your hand.
              Brocade material, three-dimensional texture, more layered.The
              first and most important criterion is pixel density: the statistic
              that generally gives the best idea of a screen’s sharpness.If it
              did that and nothing else, however, there would be a problem. User
              interface elements like menus and icons would look tiny. To
              compensate for this, Apple created what it calls HiDPI mode, where
              each interface element is doubled in size vertically and
              horizontally and so appears at the same size as it would on a
              non-Retina display.
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

export default MobileCameraBanner;
