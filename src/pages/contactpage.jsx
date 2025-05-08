import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

 function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // You can replace with your form submission logic (email service, API call, etc.)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-black">Get in Touch</h2>
          <p className="text-gray-600">
            We’d love to hear from you. Whether you’re curious about our work,
            offerings, or just want to connect—reach out.
          </p>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <Mail className="text-black" /> info@transpersonal.org
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-black" /> +1 (555) 123-4567
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-black" /> 123 Soul Path, Unity City, CA
            </div>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-xl space-y-6"
        >
          <div>
            <label className="block mb-1 text-sm text-gray-600">Name</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-600">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-600">Message</label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
export default ContactPage