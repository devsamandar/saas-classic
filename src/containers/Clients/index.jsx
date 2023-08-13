import React from "react";
import Title from "../../components/Title";

function Clients() {
  return (
    <section
      className="bg-gradient-to-r from-gray-100/70 to-gray-100/50 relative xl:py-24 py-16"
      id="clients"
    >
      <div className="absolute top-0 inset-x-0 hidden sm:block">
        <img
          src="assets/images/shapes/white-wave.svg"
          alt="svg"
          className="w-full -scale-x-100"
        />
      </div>
      <div className="py-5">
        <div className="container" data-aos="fade-up" data-aos-duration={300}>
          <Title
            title="Clients"
            page="The smart people management you need"
            text="21,000+ organizations trust Prompt to drive perfomance & engagement"
          />
          <div className="flex flex-wrap items-center justify-center lg:gap-24 gap-10 mt-14">
            <div>
              <img src="assets/images/brands/amazon.svg" className="h-8" />
            </div>
            <div>
              <img src="assets/images/brands/google.svg" className="h-8" />
            </div>
            <div>
              <img src="assets/images/brands/paypal.svg" className="h-8" />
            </div>
            <div>
              <img src="assets/images/brands/spotify.svg" className="h-8" />
            </div>
            <div>
              <img src="assets/images/brands/shopify.svg" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
