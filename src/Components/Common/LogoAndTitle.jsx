import React from "react";

const LogoAndTitle = ({ title }) => {
  return (
    <div>
      <img
        className="h-12 mx-auto"
        src="/assets/image/learningportal.svg"
        alt="Logo"
      />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
        {title}
      </h2>
    </div>
  );
};

export default LogoAndTitle;
