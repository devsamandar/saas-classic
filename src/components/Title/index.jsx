import React from "react";

function Title({ title, page, text }) {
  return (
    <div className="text-center">
      <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
        {title}
      </span>
      <h1 className="text-3xl/tight font-medium mt-3 mb-4">{page}</h1>
      <p className="text-gray-500">{text}</p>
    </div>
  );
}

export default Title;
