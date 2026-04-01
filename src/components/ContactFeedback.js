import React from "react";
import { useForm } from "@formspree/react";

function ContactFeedback() {
  const [state, handleSubmit] = useForm("maqaoydg");

  return (
    <div id="contact"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "450px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "25px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
          color: "white",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          📩 Contact / Feedback
        </h2>

        {state.succeeded ? (
          <p style={{ color: "#4ade80", textAlign: "center" }}>
            ✅ Message sent successfully!
          </p>
        ) : (
          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              style={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Write your message or feedback..."
              required
              style={{ ...inputStyle, height: "120px", resize: "none" }}
            />

            <button
 
              type="submit"
              disabled={state.submitting}
              style={buttonStyle}
              onMouseOver={(e) => {
  e.target.style.transform = "scale(1.05)";
  e.target.style.boxShadow = "0 0 20px rgba(99,102,241,0.6)";
}}
onMouseOut={(e) => {
  e.target.style.transform = "scale(1)";
  e.target.style.boxShadow = "none";
}}
            >
              {state.submitting ? "Sending..." : "Send"}
            </button>

          </form>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "8px 0",
  borderRadius: "12px",
  border: "none",
  outline: "none",
  background: "rgba(255,255,255,0.1)",
  color: "white",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  borderRadius: "12px",
  border: "none",
  background: "linear-gradient(90deg, #6366f1, #3b82f6)",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};



export default ContactFeedback;