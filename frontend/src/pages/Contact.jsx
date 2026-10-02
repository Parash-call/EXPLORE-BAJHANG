import React, { useState } from 'react';
import { sendContact } from '../services/api';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'booking',
    tripDates: '',
    destination: '',
    travelers: '2',
    message: '',
  });
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      await sendContact(form);
      setStatus('success');
      setForm({
        name: '',
        email: '',
        subject: 'booking',
        tripDates: '',
        destination: '',
        travelers: '2',
        message: '',
      });
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container section">
      <h1 className="section-title">Plan Your Adventure</h1>
      <p className="section-subtitle">Tell us about your Bajhang trip and we will help arrange accommodation, guides, and local experiences.</p>

      {status === 'success' && (
        <div className="alert-success">Thanks! Your trip request has been received and our team will contact you shortly.</div>
      )}
      {status === 'error' && (
        <div className="alert-error">Something went wrong. Please try again later.</div>
      )}

      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row twocol">
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
            </div>
          </div>

          <div className="form-row twocol">
            <div className="form-group">
              <label>Trip type</label>
              <select name="subject" value={form.subject} onChange={handleChange} required>
                <option value="booking">Booking Request</option>
                <option value="general">General Inquiry</option>
                <option value="tourism">Tourism Information</option>
                <option value="guide">Local Guide Request</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
            <div className="form-group">
              <label>Travel dates</label>
              <input type="text" name="tripDates" value={form.tripDates} onChange={handleChange} placeholder="e.g. 15-20 October 2026" />
            </div>
          </div>

          <div className="form-row twocol">
            <div className="form-group">
              <label>Destination</label>
              <input type="text" name="destination" value={form.destination} onChange={handleChange} placeholder="Khaptad, Durgathali, Api Himal..." />
            </div>
            <div className="form-group">
              <label>Travelers</label>
              <select name="travelers" value={form.travelers} onChange={handleChange}>
                <option value="1">1 traveler</option>
                <option value="2">2 travelers</option>
                <option value="3">3 travelers</option>
                <option value="4">4 travelers</option>
                <option value="5+">5+ travelers</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} required rows="5" placeholder="Share your travel plans, accommodation needs, guide preferences, or special requests..." />
          </div>

          <button type="submit" className="btn-primary" disabled={submitting}>
            {submitting ? 'Sending...' : 'Request a Trip Plan'}
          </button>
        </form>

        <aside className="contact-info-card">
          <h3>Contact details</h3>
          <ul>
            <li>📍 Bajhang, Far-Western Nepal</li>
            <li>📞 +977-98XXXXXXXX</li>
            <li>✉️ hello@explorebajhang.com</li>
            <li>🧭 Local guides, homestays, and trekking help</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default Contact;
