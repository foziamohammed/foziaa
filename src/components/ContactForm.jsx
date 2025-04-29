import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setErrorMessage("");

    emailjs
      .sendForm(
        "service_r55bmy5", 
        "template_wdjoakn", 
        e.target,
        "5i_SszEBU6ztQlA8W" 
      )
      .then(() => {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("Failed to send message. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 rounded-2xl shadow-xl items-center py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Do you want to work together with me?
      </h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <div>
          <label className="block text-gray-900 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-900 rounded-lg focus:ring focus:ring-blue-300 text-black"
          />
        </div>
        <div>
          <label className="block text-gray-900 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-900 rounded-lg focus:ring focus:ring-gray-300 text-black"
          />
        </div>
        <div>
          <label className="block text-gray-900 font-medium mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 border border-gray-900 rounded-lg focus:ring focus:ring-blue-300 text-black"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition flex justify-center"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && <p className="text-gray-900 text-center mt-4">Message sent successfully!</p>}
        {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
      </form>
    </div>
  );
}
