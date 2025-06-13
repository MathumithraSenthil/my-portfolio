import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    senderEmail: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { senderEmail, subject, message } = formData;

    if (!senderEmail || !subject || !message) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      await axios.post('http://localhost:9887/Email/send', formData);
      alert('Mail sent successfully!');
      setFormData({ senderEmail: '', subject: '', message: '' });
      setShowPopup(false);
    } catch (error) {
      console.error('Error sending mail:', error);
      alert('Failed to send mail.');
    }
  };

  return (
    <div className="container-fluid pb-4" style={{ backgroundColor: 'rgba(136, 126, 119, 0.91)' }}>
      <div className='text-center align-items-center'>
        <p className="fs-1 p-5 text-white" style={{ textShadow: "3px 3px 5px rgba(0, 0, 0)", fontFamily: "Cinzel" }}>
          Contact
        </p>
      </div>
      <div className='row d-flex justify-content-center align-items-stretch'>
        <div className="col-md-2 justify-content-center">
          <span className="fs-3 text-dark" style={{ fontFamily: "Cormorant" }}>Let's Connect</span><br />
          <span className="fs-2 text-dark" style={{ textShadow: "2px 2px 3px rgba(0, 0, 0)", fontFamily: "Cinzel" }}>DIGITALLY</span>
        </div>
        <div className="col-md-2 justify-content-center">
          <div className="position-relative ps-4 border-start border-dark border-4">
            <p className="fs-5 fw-bold text-dark" style={{ fontFamily: "Cormorant" }}>
              <button className="btn btn-outline-dark" onClick={() => window.open("https://github.com/MathumithraSenthil", "_blank")} type="button">
                <i className="bi bi-github"></i>
              </button>&nbsp;GitHub
            </p>
            <p className="fs-5 fw-bold text-dark" style={{ fontFamily: "Cormorant" }}>
              <button className="btn btn-outline-dark" onClick={() => window.open("https://www.linkedin.com/in/mathumithrasenthil/", "_blank")} type="button">
                <i className="bi bi-linkedin"></i>
              </button>&nbsp;LinkedIn
            </p>
            <p className="fs-5 fw-bold text-dark" style={{ fontFamily: "Cormorant" }}>
              <button className="btn btn-outline-dark" onClick={() => setShowPopup(true)} type="button">
                <i className="bi bi-envelope-at-fill"></i>
              </button>&nbsp;GMail
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showPopup} onHide={() => setShowPopup(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="fs-4 fw-bold text-dark" style={{ fontFamily: "Cormorant" }}>Send a Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label className="fs-5 fw-bold text-dark" style={{ fontFamily: "Cormorant" }}>Your Email Address</Form.Label>
              <Form.Control
                type="email"
                name="senderEmail"
                placeholder="example@gmail.com"
                value={formData.senderEmail}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label className="fs-5 fw-bold text-dark" style={{ fontFamily: "Cormorant" }}>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                placeholder="Subject of your message"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label className="fs-5 fw-bold text-dark" style={{ fontFamily: "Cormorant" }}>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="fs-5 fw-bold text-white" style={{ fontFamily: "Cormorant" }} variant="primary" onClick={() => setShowPopup(false)}>Cancel</Button>
          <Button className="fs-5 fw-bold text-white" style={{ fontFamily: "Cormorant" }} variant="primary" onClick={handleSubmit}>Send</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;
