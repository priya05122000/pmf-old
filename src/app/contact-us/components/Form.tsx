
import { GOLDEN_GRADIENT } from "@/lib/gradients";
import { useState } from "react";
import React from 'react'

 const Form = () => {
    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    message: "",
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value, type } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" && "checked" in e.target
      ? (e.target as HTMLInputElement).checked
      : value,
  }));
};


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted!");
  };

  return (
    <div className="min-h-screen bg-[#151515] flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-transparent p-6 rounded-lg">
        {/* Title */}
        <h1 className={`text-center font-bold leading-[1] tracking-[-0.02em]
          text-4xl sm:text-5xl md:text-7xl lg:text-5xl xl:text-6xl ${GOLDEN_GRADIENT} bg-clip-text text-transparent mb-8`}>
          Contact us
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-1/2 p-3 bg-[#151515] border border-gray-700 rounded-md text-white placeholder-white focus:outline-none focus:border-yellow-400"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-1/2 p-3 bg-[#151515] border border-gray-700 rounded-md text-white placeholder-white focus:outline-none focus:border-yellow-400"
            />
          </div>

          <input
            type="text"
            name="mobile"
            placeholder="Mobile number"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-3 bg-[#151515] border border-gray-700 rounded-md text-white placeholder-white focus:outline-none focus:border-yellow-400"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-[#151515] border border-gray-700 rounded-md text-white placeholder-white focus:outline-none focus:border-yellow-400"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-[#151515] border border-gray-700 rounded-md text-white placeholder-white focus:outline-none focus:border-yellow-400"
            required
          />

          {/* Consent */}
          <label className="flex items-start gap-2 text-sm text-white">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1"
              required
            />
            By submitting this form, I agree to Terms & Conditions and Privacy Policy. I consent to receive updates and notifications via Email, WhatsApp and SMS.
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-3 mt-4 font-semibold text-black rounded-sm ${GOLDEN_GRADIENT} hover:opacity-90 transition`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
export default Form;
