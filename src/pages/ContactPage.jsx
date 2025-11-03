import React, { useState } from 'react';
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from 'react-router-dom';

// Data for this page, updated with the new phone numbers
const contactDetails = {
  phones: ["8794868689", "7641908263", "8750223978"], // Updated phone numbers
  email: "uss.shillong@gmail.com",
  address:
    "55 Pillar House, Harijan Dairy, Upper Mawprem, Shillong - 793002, Meghalaya",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=55+Pillar+House,+Harijan+Dairy,+Upper+Mawprem,+Shillong",
};

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("✅ Message sent successfully! We'll get back to you soon.");
      form.reset();
    } else {
      setStatus("❌ Oops! There was a problem sending your message.");
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Get In Touch</h2>
      <p className="text-lg text-gray-600 mb-10">
        We're here to help. Contact us via phone, email, or send a message
        below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* --- Contact Form (UPDATED) --- */}
        <div className="card shadow-lg rounded-xl p-8 bg-white">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Send Us a Message
          </h3>
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/mldoznno" // 1. Updated with your correct URL
            method="POST"
            className="space-y-4"
          >
            <div>
              {/* 2. Added Labels for accessibility */}
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name" // name attribute is correct
                id="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email" // name attribute is correct
                id="email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message" // name attribute is correct
                id="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500 outline-none"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-md py-3 font-semibold hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </form>

          {status && (
            <p
              className={`mt-4 text-center font-medium ${
                status.startsWith("✅")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </div>

        {/* --- Contact Details (Updated with new numbers) --- */}
        <div className="card shadow-lg rounded-xl p-8 bg-white space-y-6">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Contact Details
          </h3>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <Phone className="text-blue-600 mt-1" />
              <div>
                <strong>Phone:</strong>
                {contactDetails.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="block hover:text-blue-600"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="text-blue-600 mt-1" />
              <div>
                <strong>Email:</strong>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="block hover:text-blue-600"
                >
                  {contactDetails.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="text-blue-600 mt-1" />
              <div>
                <strong>Address:</strong>
                <p>{contactDetails.address}</p>
                <a
                  href={contactDetails.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

