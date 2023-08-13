import React from "react";
import Title from "../../components/Title";
import PricingCard from "../../components/PricingCard";
import pricingsData from "../../data/pricings.data";

function Pricing() {
  return (
    <section
      className="bg-gradient-to-r from-gray-100/70 to-gray-100/50 relative py-16 sm:py-24"
      id="pricing"
    >
      <div className="absolute top-0 inset-x-0 hidden sm:block">
        <img
          src="assets/images/shapes/white-wave.svg"
          alt="svg"
          className="w-full -scale-x-100"
        />
      </div>
      <div className="py-5">
        <div className="container relative">
          <Title
            title="Plans"
            page="Pricing"
            text="Pricing that works for everyone"
          />
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 mt-14">
            {pricingsData.map((item, index) => (
              <PricingCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 hidden sm:block">
        <img
          src="assets/images/shapes/white-wave.svg"
          alt="svg"
          className="w-full scale-x-100 -scale-y-100"
        />
      </div>
    </section>
  );
}

export default Pricing;
