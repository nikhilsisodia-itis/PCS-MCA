import React, { useState } from "react";

const SignInForm = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Handler to update state when input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.phone || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    setError("");

    // Process form data (you can send it to your API here)
    console.log("Sign-In Form submitted:", formData);

    // Reset form data after submission
    setFormData({
      phone: "",
      password: "",
    });
  };

  return (
    <>
      <h1 className="text-orange-500 text-2xl md:text-3xl lg:text-4xl">
        Sign-in
      </h1>
      <br />
      <fieldset className="border-2 border-solid container mx-auto p-5 md:p-20 rounded-lg">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label className="text-white">Phone Number:</label>
            <br />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="123-456-7890"
              className="bg-transparent border-2 border-double rounded-lg text-white hover:bg-purple-500 hover:text-black text-center"
              required
            />
          </div>
          <br />
          <br />
          <div>
            <label className="text-white">Password:</label>
            <br />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="bg-transparent border-2 border-double rounded-lg text-white hover:bg-purple-500 hover:text-black text-center"
              required
            />
          </div>
          <br />
          <br />
          <button
            type="submit"
            className="text-white p-2 border-2 border-purple-400 hover:bg-purple-600 hover:text-black rounded-lg"
          >
            Sign In
          </button>
        </form>
      </fieldset>
    </>
  );
};

export default SignInForm;
