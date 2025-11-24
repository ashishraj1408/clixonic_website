import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { X } from 'lucide-react';
import "./RefreshPopup.css";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function RefreshPopup() {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  // Validation
  const validate = () => {
    let temp = {};

    if (!form.name.trim()) temp.name = "Name is required";

    if (!form.email.trim()) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email.trim()))
      temp.email = "Invalid email format";

    if (!form.phone) temp.phone = "Phone number is required";
    else if (form.phone.length < 10)
      temp.phone = "Enter a valid phone number";

    if (!form.message.trim()) temp.message = "Message is required";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  // Input change for text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setSending(true);

    try {
      await emailjs.send(
        "rajashishraj14@gmail.com",
        "rajjashish1500@gmail.com",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,  // phone from react-phone-number-input
          message: form.message,
        },
        "YOUR_PUBLIC_KEY"
      );

      alert("Form successfully sent to your email!");
      setOpen(false);
    } catch (err) {
      alert("Failed to send email.");
    }

    setSending(false);
  };

  if (!open) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-card animate-popup">
        <button className="close-btn" onClick={() => setOpen(false)}>
          <X size={24} />
        </button>

        <h2 className="title">Get In Touch!</h2>
        <p className="subtitle">Please fill your details</p>

        <form onSubmit={handleSubmit} className="form">

          {/* Name */}
          <div className="form-group">
            <label>Full Name <span className="required text-red-600 text-lg">*</span></label>
            <input
              placeholder="Your full name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email <span className="required text-red-600 text-lg">*</span></label>
            <input
              placeholder="Enter your email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label>Phone <span className="required text-red-600 text-lg">*</span></label>

            <PhoneInput
              defaultCountry="IN"
              placeholder="Enter phone number"
              value={form.phone}
              onChange={(value) => {
                setForm((prev) => ({ ...prev, phone: value }));
                setErrors((prev) => ({ ...prev, phone: "" }));
              }}
              className="phone-input"
              required
            />

            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          {/* Message */}
          <div className="form-group">
            <label>Message</label>
            <textarea
              placeholder="Tell us about your project..."
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button className="submit-btn" disabled={sending}>
            {sending ? "Sending..." : "Submit"}
          </button>
        </form>

      </div>
    </div>
  );
}
