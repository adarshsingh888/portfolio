import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Fb_URL, Insta_URL, GitHub_URL, gmail, whatsapp, twitter_URL, LinkedIn_URL } from '../utils/data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Log formData to check if it's correct
    console.log('Form Data:', formData);

    emailjs
      .send(
        'service_7fehnhr', // Your EmailJS service ID
        'template_jgtxx1e', // Your EmailJS template ID
        formData, // Form data
        'a4wurX80jdpsFsY5U' // Your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('Success:', response);
          alert('Message sent successfully!');
          setLoading(false);
        },
        (error) => {
          console.error('Failed to send message:', error);
          setLoading(false);
          setError('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-100 py-10 px-6 my-14">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>
        {/* Contact Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
              placeholder="Your Message"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Display error message if there is any */}
        {error && (
          <div className="mt-4 text-red-500">{error}</div>
        )}

        {/* Other Contact Methods */}
        <div className="mt-10 ">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Other Ways to Connect</h3>
          <div className="flex justify-center space-x-4">
            <a href={Fb_URL} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Facebook</a>
            <a href={Insta_URL} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">Instagram</a>
            <a href={GitHub_URL} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">GitHub</a>
            <a href={`mailto:${gmail}`} className="text-red-500 hover:underline">Gmail</a>
            <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">WhatsApp</a>
            <a href={twitter_URL} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Twitter</a>
            <a href={LinkedIn_URL} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
