import React, { useState } from "react";

const SignUpForm = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setError("");

    // Process form data (you can send it to your API here)
    console.log("Form submitted:", formData);

    // Reset form data after submission
    setFormData({
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      <h2 className="text-orange-500 text-2xl md:text-3xl lg:text-4xl">
        Sign Up
      </h2>
      <br />
      <fieldset className="border-2 border-solid container mx-auto p-2 md:p-10 md:px-32 rounded-lg">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label className="text-white">Name</label>
            <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-transparent border-2 border-double rounded-lg text-white hover:bg-purple-500 hover:text-black text-center"
              required
            />
          </div>
          <br />
          <div>
            <label className="text-white">Phone Number</label>
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
          <div>
            <label className="text-white">Email</label>
            <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="bg-transparent border-2 border-double rounded-lg text-white hover:bg-purple-500 hover:text-black text-center"
              required
            />
          </div>
          <br />
          <div>
            <label className="text-white">Password</label>
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
          <div>
            <label className="text-white">Confirm Password</label>
            <br />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="bg-transparent border-2 border-double rounded-lg text-white hover:bg-purple-500 hover:text-black text-center"
              required
            />
          </div>
          <br />
          <button
            type="submit"
            className="text-white p-2 border-2 border-purple-400 hover:bg-purple-600 hover:text-black rounded-lg"
          >
            Sign Up
          </button>
        </form>
      </fieldset>
    </>
  );
};

export default SignUpForm;
