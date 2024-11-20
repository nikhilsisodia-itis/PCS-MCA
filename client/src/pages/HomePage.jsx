import React from "react";
import Middle from "../components/Middle";

function HomePage() {
  return (
    <Middle>
    <h1 className="text-white text-4xl md:text-5xl lg:text-7xl">
              The Population Control System
            </h1>
            <br />
            <p className="text-white text-center text-base md:text-lg">
              An Initiative by the Government, the Responsibility of the
              Citizens.
              <br />
              One of the steps towards 'Viksit Bharat'.
            </p>
            <br />
            <br />
            <br />
            <p className="text-white text-center">
              Be a responsible citizen.
              <button className="border-2 border-solid rounded-lg p-2 bg-purple-700 hover:bg-purple-800 mt-4">
                Get Started
              </button>
              <br />
              <br />
              Already registered?{" "}
              <a href="#" className="text-orange-500">
                Log in.
              </a>
            </p>
    </Middle>
);
}

export default HomePage;
