import React from "react";
import Title from "../../components/Title";
import FAQCard from "../../components/FAQCard";
import faqsData from "../../data/faqs.data";

function FAQ() {
  return (
    <section className="py-16 sm:py-24" id="faq">
      <div className="container" data-aos="fade-up" data-aos-duration={2000}>
        <Title
          title="FAQs"
          page="Frequently Asked Questions"
          text="Here are some of the basic types of questions for our customers"
        />
        <div
          data-fc-type="accordion"
          className="mt-14 lg:w-3/4 lg:mx-auto 2xl:w-2/3"
        >
          {faqsData.map((item, index) => (
            <FAQCard item={item} key={index} />
          ))}
        </div>
        <div className="text-center mt-14">
          <p className="inline-flex flex-wrap gap-1 bg-gray-100 text-sm rounded-lg py-2 px-5">
            Still have unanswered questions?
            <a href="#" className="hover:text-primary transition-all">
              {" "}
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
