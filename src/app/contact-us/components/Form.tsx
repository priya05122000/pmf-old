import React, { useState, ChangeEvent, FormEvent, FC } from "react";
import Heading from "@/components/Heading";
import Span from "@/components/Span";
import { GOLDEN_GRADIENT } from "@/lib/gradients";


type FormData = {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  message: string;
  consent: boolean;
};

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
  message: "",
  consent: false,
};

type InputProps = {
  name: keyof Omit<FormData, "consent" | "message">;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
};

const FormInput: FC<InputProps> = ({ name, type = "text", placeholder, value, onChange, required, className }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={className}
    required={required}
    autoComplete="off"
  />
);

const Form: FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Replace with actual submit logic
    alert("Form submitted!");
    setFormData(initialFormData);
  };

  return (
    <div className="py-10 sm:py-20 flex items-center justify-center">
      <div className="w-full max-w-xl bg-transparent p-6 sm:p-8 rounded-lg">
        {/* Title */}
        {/* <h1 className={`text-center font-bold leading-[1] tracking-[-0.02em]
          text-4xl sm:text-5xl md:text-7xl lg:text-5xl xl:text-6xl ${GOLDEN_GRADIENT} bg-clip-text text-transparent mb-8`}>
          Contact us
        </h1> */}

        <article>
          <Heading
            level={1}
            className={`leading-[1] tracking-[-0.02em] mb-8 text-center`}
          >
            Contact us
          </Heading>
        </article>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <FormInput
              name="firstName"
              placeholder="Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full sm:w-1/2 p-3 border border-gray-700 text-white placeholder-white focus:outline-none focus:border-[#b8892d]"
            />
            <FormInput
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full sm:w-1/2 p-3 border border-gray-700 text-white placeholder-white focus:outline-none focus:border-[#b8892d]"
            />
          </div>
          <FormInput
            name="mobile"
            placeholder="Mobile number"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-700 text-white placeholder-white focus:outline-none focus:border-[#b8892d]"
          />
          <FormInput
            name="email"
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-700 text-white placeholder-white focus:outline-none focus:border-[#b8892d]"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-700 text-white placeholder-white focus:outline-none focus:border-[#b8892d]"
            required
            autoComplete="off"
          />
          {/* Consent */}
          <label className="flex items-start gap-2 text-white">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1"
              required
            />
            <Span>
              By submitting this form, I agree to Terms & Conditions and Privacy Policy. I consent to receive updates and notifications via Email, WhatsApp and SMS.
            </Span>
          </label>
          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 mt-4 font-semibold text-blue-custom  gradient-animation hover:opacity-90 transition`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Form;
