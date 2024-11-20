import React from "react";
import Middle from "../components/Middle";

function CheckTaxPolicyPage() {
  return (
    <Middle>
      <h1 className="text-orange-500 text-4xl md:text-5xl lg:text-7xl">
        Tax Policy
      </h1>
      <br />
      <p className="text-white text-center">
        Our tax policy is designed to encourage smaller family sizes and promote
        responsible family planning. Here’s a concise breakdown of how it works:
        1. Tax Exemption for Small Families Single Child: No tax is applied on
        goods and services.
        <br />
        2. Tax for Larger Families: {">>"} Two Children: A 10% tax on all goods
        and services.
        <br />
        {">>"} Three Children: The tax increases to 20%.
        <br />
        {">>"} Four Children: Tax rate doubles to 40%.
        <br />
        {">>"} Five Children and Beyond: The tax rate doubles with each
        additional child (e.g., 80% for five children).
      </p>
      <br />
      <p className=" text-center text-2xl md:text-3xl lg:text-5xl text-orange-500">
        Policy Objective
      </p>
      <br />
      <p className="text-white text-center">
        Encourage Smaller Families: Rewards single-child families with tax
        exemptions.
        <br />
        Increase Contribution from Larger Families: Progressive tax rates for
        more children to support economic stability.
        <br />
        Promote Sustainability: Helps manage population growth and resource
        distribution effectively.
      </p>
    </Middle>
  );
}

export default CheckTaxPolicyPage;
