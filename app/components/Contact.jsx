import React, { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');

    const formData = new FormData(event.target);
    formData.append('access_key', '9654d61f-1c42-4d30-a5be-5fd59dc34138');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="py-16 px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out to me using the form below or through my social media.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input type="text" name="name" id="name" required className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 text-gray-300" placeholder="Sara Ekanayake" />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                <input type="email" name="email" id="email" required className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 text-gray-300" placeholder="sara@gmail.com" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input type="text" name="subject" id="subject" required className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 text-gray-300" placeholder="Project Inquiry" />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea name="message" id="message" rows="5" required className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 text-gray-300" placeholder="Your message here..."></textarea>
              </div>

              <button type="submit" className="w-full px-5 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition shadow-lg">
                Send Message
              </button>
              {result && <p className="text-sm text-green-400 pt-2">{result}</p>}
            </form>
          </div>

          <div className="md:w-1/2 bg-gray-800 rounded-xl p-8 shadow-lg mb-32">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center mr-4 shrink-0">
                  <i className="fas fa-envelope text-indigo-400"></i>
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium">Email</h4>
                  <a href="ttharindiattanayaka@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition">ttharindiattanayaka@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center mr-4 shrink-0">
                  <i className="fas fa-phone text-indigo-400"></i>
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium">Phone</h4>
                  <a href="tel:+11234567890" className="text-indigo-400 hover:text-indigo-300 transition">+94 71 0328089</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center mr-4 shrink-0">
                  <i className="fas fa-map-marker-alt text-indigo-400"></i>
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium">Location</h4>
                  <p className="text-indigo-400">Kurunegala</p>
                </div>
              </div>

              <div>
                <h4 className="text-gray-300 font-medium mb-4">Social Media</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-indigo-600 hover:text-white transition">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-indigo-600 hover:text-white transition">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-indigo-600 hover:text-white transition">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-indigo-600 hover:text-white transition">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
