import React from "react";

function FeedbackCard({ item }) {
  return (
    <div className="swiper-slide p-10 border rounded-xl bg-white shadow">
      <i className="fa-solid fa-quote-left text-gray-500 text-5xl" />
      <p className="my-4">{item.text}</p>
      <div className="border-b border-gray-200 w-full my-7" />
      <div className="flex items-center gap-2">
        <img src={item.image} className="h-10 w-10 rounded-full" />
        <div>
          <h1 className="text-sm mb-1">{item.person}</h1>
          <p className="text-gray-500 text-xs">{item.job}</p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
