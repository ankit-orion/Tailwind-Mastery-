import React from "react";

export const Hero = () => {
  return (
    <div className="hero-badge">
      <div className="badge">
        <span>We're hiring Founding Ruby Engineers</span>
        <svg width="16" height="16" fill="none">
          <path
            stroke="#1E1F25"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-opacity=".5"
            stroke-width="1.25"
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
          ></path>
        </svg>
      </div>
      <div className="hero-title-container">
      <h1 className="hero-title">Magically simplify accounting and taxes</h1>
      </div>

      <div className="hero-description-badge">
      <p className="hero-description">
        Automated bookkeeping. Effortless tax filing. Financial clarity. Set up in 10 mins. Back to building by 12:16am.
      </p>
      </div>
    </div>
  );
};
