import React from "react";
import Title from "../../components/Title";
import FeedbackCard from "../../components/FeedbackCard";
import feedbacksData from "../../data/feedbacks.data";

function Feedback() {
  return (
    <section className="py-16 sm:py-24 overflow-x-hidden" id="feedback">
      <div className="container" data-aos="fade-up" data-aos-duration={600}>
        <div className="grid xl:grid-cols-4 grid-cols-3 gap-6">
          <div className="col-span-3 lg:col-span-1">
            <Title
              title="Feedback"
              page="What people say"
              text="Few valuables words from our customers"
            />
            <div className="flex gap-4 mt-10">
              <div className="button-prev text-xl transition-all duration-300 hover:text-primary">
                <i className="fa-solid fa-arrow-left" />
              </div>
              <div className="button-next text-xl transition-all duration-300 hover:text-primary">
                <i className="fa-solid fa-arrow-right" />
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-2 xl:col-span-3">
            <div className="relative">
              <div className="hidden sm:block">
                <div className="before:w-24 before:h-24 before:absolute before:-top-8 before:-end-8 before:bg-[url('https://coderthemes.com/prompt/images/pattern/dot5.svg')]" />
                <div className="after:w-24 after:h-24 after:absolute after:-bottom-8 after:-start-8 after:bg-[url('https://coderthemes.com/prompt/images/pattern/dot2.svg')]" />
              </div>
              <div id="swiper_one" className="swiper relative">
                <div className="swiper-wrapper z-10">
                  {feedbacksData.map((item, index) => (
                    <FeedbackCard item={item} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
