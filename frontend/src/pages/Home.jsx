import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 via-pink-50 to-white px-6">
      {/* Hero Text */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-6">
        Welcome to Myntra
      </h1>
      <p className="text-gray-600 text-lg md:text-xl text-center max-w-2xl mb-8">
        Discover the latest fashion trends and shop clothing, footwear, and
        accessories with amazing deals.
      </p>

      {/* CTA Button */}
      <Link
        to="/products"
        className="bg-pink-600 hover:bg-pink-700 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md transition"
      >
        Shop Now
      </Link>

      {/* Hero Image */}
      <div className="mt-10 w-full max-w-md">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/84e85642054547.57bea3c1858d3.png"
          alt="Fashion Banner"
          className="rounded-2xl shadow-lg w-full"
        />
      </div>
    </div>
  );
};

export default Home;
