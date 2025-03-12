import React, { useState } from 'react';
import { FaInstagram } from 'react-icons/fa'; // For Instagram icon
import './contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <div className="contact-container">
        {/* First Column: Store Information */}
        <div className="store-info">
          <h3 className='head'>Label Badhra</h3>
          <p>
            <strong>Address:</strong> 123 Fashion Street, Mumbai, India
          </p>
          <p>
            <strong>Phone:</strong> +91 12345 67890
          </p>
          <div className="social-media">
            <a
              href="https://www.instagram.com/labelbadhra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <span>Follow us on Instagram</span>
          </div>
        </div>

        {/* Second Column: Contact Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone</label>
              <input
                type="number"
                id="mobile"
                name="mobile"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;