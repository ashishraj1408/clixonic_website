import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { message } from "antd";              //  AntD message
import "./RefreshPopup.css";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function RefreshPopup() {
  const [open, setOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage(); //  AntD hook

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
    const isValid = Object.keys(temp).length === 0;

    if (!isValid) {
      //  show AntD error toast on validation fail
      messageApi.open({
        type: "error",
        content: "Please fix the highlighted errors.",
      });
    }

    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setSending(true);

    try {
      console.log("Submitting form with data:", form);

      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      console.log("Response status:", res.status);

      const data = await res.json().catch(() => ({}));
      console.log("Response body:", data);

      if (!res.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      //  success toast instead of alert
      messageApi.open({
        type: "success",
        content: "Form successfully sent!",
      });

      setOpen(false);
    } catch (err) {
      console.error("Frontend error:", err);

      //  error toast instead of alert
      messageApi.open({
        type: "error",
        content: `Failed to send email: ${err.message}`,
      });
    } finally {
      setSending(false);
    }
  };

  if (!open) return null;

  return (
    <div className="popup-overlay">
      {contextHolder}
      <div className="popup-card animate-popup">
        <button className="close-btn" onClick={() => setOpen(false)}>
          <X size={24} />
        </button>

        <h2 className="title">Get In Touch!</h2>
        <p className="subtitle">Please fill your details</p>

        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label>
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>
              Phone <span className="text-red-600">*</span>
            </label>

            <PhoneInput
              defaultCountry="IN"
              placeholder="Enter phone number"
              value={form.phone}
              onChange={(value) => {
                setForm((prev) => ({ ...prev, phone: value }));
                setErrors((prev) => ({ ...prev, phone: "" }));
              }}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          <div className="form-group">
            <label>
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              rows="4"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project"
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <div className="flex justify-center">
            <button className="common-button" disabled={sending}>
              {sending ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
