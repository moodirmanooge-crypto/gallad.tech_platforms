import "./ContactSection.css";
import { useState } from "react";

import { db } from "../../firebase/firebaseConfig";

import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), {
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.service,
        message: form.message,
        status: "Pending",
        createdAt: serverTimestamp(),
      });

      alert("Request Sent Successfully!");

      // Nadiifi form-ka kadib markuu dirmo
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Something went wrong.");
    }
  };

  return (
    <section className="contact">
      <h2>Start Your Project</h2>
      <p>Tell us your idea and we'll contact you soon.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <select name="service" value={form.service} onChange={handleChange} required>
          <option value="">Select Service</option>
          <option value="Website">Website</option>
          <option value="Flutter App">Flutter App</option>
          <option value="AI Video">AI Video</option>
          <option value="POS System">POS System</option>
          <option value="Branding">Branding</option>
        </select>
        <textarea
          rows="6"
          placeholder="Project Details"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Request</button>
      </form>
    </section>
  );
}

export default ContactSection;