import { useEffect, useState } from "react";
import "./AdminMessages.css";

function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMessages = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "http://localhost:5000/api/messages"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch messages");
      }

      const data = await response.json();

      console.log("API Response:", data);

      if (data.success) {
        setMessages(data.data || []);
      } else {
        setError("Messages could not be loaded.");
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
      setError("Unable to connect to backend server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <section className="admin-messages" id="admin-dashboard">
      <div className="admin-container">

        <div className="admin-heading">
          <span>ADMIN DASHBOARD</span>

          <h2>Contact Messages</h2>

          <p>
            Messages received through your portfolio contact form.
          </p>
        </div>

        {loading && (
          <div className="loading-message">
            Loading messages...
          </div>
        )}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {!loading && !error && messages.length === 0 && (
          <div className="no-message">
            No messages found.
          </div>
        )}

        {!loading && !error && messages.length > 0 && (
          <div className="messages-grid">

            {messages.map((item) => (
              <div
                className="message-card"
                key={item._id}
              >

                <div className="message-header">
                  <div>
                    <span className="message-label">
                      FROM
                    </span>

                    <h3>
                      {item.name}
                    </h3>
                  </div>

                  <span className="message-date">
                    {item.createdAt
                      ? new Date(item.createdAt).toLocaleDateString()
                      : "No date"}
                  </span>
                </div>

                <div className="message-info">

                  <p>
                    <strong>Email</strong>
                    <br />
                    {item.email}
                  </p>

                  <p>
                    <strong>Subject</strong>
                    <br />
                    {item.subject}
                  </p>

                </div>

                <div className="message-body">

                  <span className="message-label">
                    MESSAGE
                  </span>

                  <p>
                    {item.message}
                  </p>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}

export default AdminMessages;