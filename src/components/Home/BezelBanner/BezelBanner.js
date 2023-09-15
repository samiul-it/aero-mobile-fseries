import React from "react";

const BezelBanner = () => {
  return (
    <div>
      <div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3000"
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://consumer.huawei.com/content/dam/huawei-cbg-site/cn/mkt/pdp/phones/mate60-pro/img/design/design-appearence@2x.webp)",
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
                  Bezel
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-duration="3000" className="mb-5">
                The four-curved screen is of equal depth, round and refined, and
                comfortable to hold. Equipped with Huawei Imaging™ display
                technology, it presents real colors with professional color
                accuracy. Precise immersive touch, easy to operate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BezelBanner;
