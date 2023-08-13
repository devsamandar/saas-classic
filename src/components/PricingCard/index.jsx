import React from "react";

function PricingCard({ item }) {
  return (
    <div data-aos="fade-up" data-aos-duration={500}>
      <div className="transition-all duration-300 pointer-events-auto hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.12)] hover:-translate-y-1">
        <div className="border border-gray-300 bg-white rounded w-full h-full text-center p-5">
          <span className="text-lg text-primary">{item.type}</span>
          <h1 className="text-3xl tight font-semibold mt-3">
            <sup className="text-gray-500 text-sm font-normal ">$</sup>{" "}
            {item.price}{" "}
            <sub className="text-gray-500 text-sm font-normal">{item.date}</sub>
          </h1>
          <div className="border-b border-gray-200 w-full my-7" />
          <div>
            <div className="flex flex-col gap-4">
              {item.includes.map((include, index) => (
                <p
                  className="flex items-center text-gray-600 gap-4"
                  key={index}
                >
                  <i className="fa-solid fa-check text-green-500 text-lg" />
                  {include}
                </p>
              ))}
            </div>
            <div className="flex mt-[120px]">
              <a
                href="#"
                className="bg-primary/10 text-primary/90 w-full py-3 rounded-lg border border-transparent hover:border hover:border-primary/20 transition-all duration-300"
              >
                Purchase Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
