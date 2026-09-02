import React, { useState, useEffect } from 'react';
import '../styles/ModalStyles.css';

const initialForm = { name: '', email: '', message: '' };

const Modal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = event => {
    const { name, value } = event.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) onClose();
  };

  const handleSubmit = event => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `Project inquiry from ${form.name || 'website'}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:ilapalatov@gmail.com?subject=${subject}&body=${body}`;
    setForm(initialForm);
    onClose();
  };

  return (
    <div className="overlay-modal" onClick={handleOverlayClick}>
      <div
        className="modal-bg"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="modal-eyebrow">get in touch</div>
        <h3 id="modal-title" className="header-of-modal">
          Let's talk.
        </h3>
        <p className="modal-subtext">
          Tell me a bit about what you're building — I'll get back to you by
          email.
        </p>

        <form className="modal-form" onSubmit={handleSubmit}>
          <input
            className="modal-input"
            name="name"
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="modal-input"
            name="email"
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="modal-input modal-textarea"
            name="message"
            placeholder="What are you building?"
            value={form.message}
            onChange={handleChange}
            rows={4}
            required
          />
          <button type="submit" className="modal-btn-send">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
