// src/pages/ContactPage.jsx
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend (e.g., Firebase Functions)
    console.log('Form sent:', formData);
    setStatusMessage('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' }); // Clear the form
    // Simulate a message box instead of an alert
    setTimeout(() => setStatusMessage(''), 5000); // Clear the message after 5 seconds
  };

  return (
    <div className="container mx-auto px-4 py-12 font-inter min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Contact Us</h1>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-2xl mx-auto">
        <p className="text-lg text-gray-700 text-center mb-6">
          Do you have questions, feedback, or need support? Fill out the form below or reach out to us directly.
        </p>

        {statusMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md relative mb-6" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline ml-2">{statusMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="mt-10 text-center">
          <p className="text-lg text-gray-800 font-semibold mb-2">Direct Contact:</p>
          <a href="mailto:info@mbtianalyser.com" className="text-blue-600 font-medium">info@mbtianalyser.com</a>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg text-gray-800 font-semibold mb-3">Follow Us:</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 10.702v.053a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.472 2.906 8.257 6.938 9.584.504.092.687-.218.687-.484 0-.236-.01-1.03-.015-1.996-2.825.612-3.414-1.144-3.414-1.144-.461-1.171-1.125-1.485-1.125-1.485-.918-.62.07-.608.07-.608 1.017.072 1.55 1.042 1.55 1.042.906 1.545 2.378 1.097 2.955.84.092-.656.356-1.097.648-1.347-2.257-.257-4.637-1.128-4.637-5.029 0-1.109.395-2.01.995-2.712-.1-.257-.435-1.284.097-2.673 0 0 .81-.271 2.647 1.037.769-.213 1.58-.32 2.39-.32.81 0 1.62.107 2.39.32 1.836-1.308 2.646-1.037 2.646-1.037.532 1.389.197 2.416.097 2.673.6.702.996 1.603.996 2.712 0 3.91-2.383 4.766-4.645 5.022.365.314.686.924.686 1.865 0 1.347-.012 2.427-.012 2.75 0 .268.18.579.692.482C19.093 20.257 22 16.472 22 12z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
