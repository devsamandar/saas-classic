import React from "react";

function FAQCard({ item }) {
  return (
    <div className="border border-gray-300 rounded-lg">
      <bu
        p-5tton
        className="inline-flex p-5 items-center justify-between w-full font-semibold text-left transition"
        data-fc-type="collapse"
      >
        {item.question}
        <span className="fa-solid fa-angle-down text-xl block transition-all fc-collapse-open:rotate-180" />
      </bu>
      <div className="w-full overflow-hidden transition-[height] duration-300">
        <p className="text-slate-500 dark:text-gray-300 pt-3 p-5">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default FAQCard;
