import React from "react";

const DeviceSpecification = () => {
  const technologies = [
    {
      name: "",
      image:
        "https://cdn.tgdd.vn/hoi-dap/1172096/tim-hieu-ve-dong-chip-mediatek-helio-p35-1-800x572.jpg  ",
    },
    {
      name: "",
      image:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/download82.png",
    },
    {
      name: "",
      image:
        "https://media.licdn.com/dms/image/C5112AQGkgkXWStYvhg/article-cover_image-shrink_600_2000/0/1575638025204?e=2147483647&v=beta&t=EHg2T-4XCXwyEqQAeeRAgzZTIYeuK5sCmvBZcOjpVhA",
    },
  ];
  return (
    <div>
      <h1
        data-aos="fade-up"
        data-aos-duration="3000"
        className="text-3xl lg:text-8xl text-slate-600 font-bold text-center  "
      >
        gaming powered by{" "}
        <span className="text-5xl lg:text-9xl text-lime-600 font-bold ">
          {" "}
          AERO
        </span>
      </h1>

      <div className="hero min-h-fit ">
        <div className="hero-content text-center text-neutral-content">
          <div
            data-aos="fade-right"
            data-aos-offset="350"
            data-aos-easing="ease-in-sine"
            className="grid lg:grid-cols-3 gap-4 lg:gap-5 mt-10 mb-10"
          >
            {technologies?.map((technology, index) => (
              <div
                key={index}
                className="card lg:w-96 bg-[#040404]  hover:opacity-90 shadow-xl shadow-lime-600/50"
              >
                <figure>
                  <img
                    className="transition duration-150 ease-in-out hover:scale-110"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    src={technology?.image}
                    alt="Shoes"
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceSpecification;
