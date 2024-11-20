import React from "react";
import Middle from "../components/Middle";

function About() {
  return (
    <Middle>
      <h1 className="text-white text-xl md:text-2xl lg:text-3xl">
        Welcome to the official portal of the Population Control System, an
        initiative spearheaded by the Government to promote sustainable family
        planning and resource management for a prosperous future.
      </h1>
      <br />
      <p className=" text-center text-2xl md:text-3xl lg:text-5xl text-orange-500">
        Our Mission
      </p>
      <br />
      <p className="text-white text-center">
        Our mission is to provide a platform for citizens to register their
        families and manage their resources effectively. 
        <br />
        The rapid growth of the population places immense pressure on
        our natural resources, infrastructure, and social services. By
        incentivizing smaller families through a structured tax policy, we aim
        to curb this trend and create a more sustainable environment for future
        generations. Our approach is not just about control, it is about
        planning for a balanced demographic that can thrive without exhausting
        the country's resources.
      </p>
    </Middle>
  );
}

export default About;
