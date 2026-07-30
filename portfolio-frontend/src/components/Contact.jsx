import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Input fields ka data handle karna
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form submit karna
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("Message sent successfully! Thank you for contacting me.");

        // Form clear karna
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus(
          data.message || "Message could not be sent. Please try again."
        );
      }
    } catch (error) {
      console.error("Error:", error);

      setStatus(
        "Unable to connect to server. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h2>
            Let's Build Something <span>Great Together</span>
          </h2>

          <p>
            Whether you have a project in mind, a job opportunity,
            or simply want to connect, I would love to hear from you.
          </p>
        </div>

        <div className="contact-content">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <h3>Let's Talk</h3>

            <div className="contact-item">

              <div className="contact-icon">
                ✉
              </div>

              <div className="contact-item-content">

                <h4>Email</h4>

                <a href="mailto:khansaher202@gmail.com">
                  khansaher202@gmail.com
                </a>

              </div>

            </div>

            <div className="contact-item">

              <div className="contact-icon">
                ☎
              </div>

              <div className="contact-item-content">

                <h4>Phone</h4>

                <a href="tel:03408276572">
                  03408276572
                </a>

              </div>

            </div>

            <div className="contact-item">

              <div className="contact-icon">
                📍
              </div>

              <div className="contact-item-content">

                <h4>Location</h4>

                <p>Pakistan</p>

              </div>

            </div>

          </div>


          {/* RIGHT SIDE FORM */}
          <div className="contact-form-container">

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <h3>Send Me a Message</h3>

              <div className="form-row">

                {/* NAME */}
                <div className="form-group">

                  <label>Your Name</label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />

                </div>


                {/* EMAIL */}
                <div className="form-group">

                  <label>Email Address</label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />

                </div>

              </div>


              {/* SUBJECT */}
              <div className="form-group">

                <label>Subject</label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  required
                />

              </div>


              {/* MESSAGE */}
              <div className="form-group">

                <label>Your Message</label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>

              </div>


              {/* STATUS MESSAGE */}
              {status && (
                <p className="form-status">
                  {status}
                </p>
              )}


              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="contact-submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}

                {!loading && (
                  <span className="button-arrow">
                    →
                  </span>
                )}
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;