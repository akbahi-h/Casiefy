import React from "react";

export default function Security() {
  return (
    <div id="privacy" style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.h1}>Privacy Policy</h1>
        <p style={styles.text}>Last updated: April 2026</p>

        <p style={styles.text}>
          This Privacy Policy explains how we collect, use, and protect your
          information when you use our website.
        </p>

        <h2 style={styles.h2}>Information We Collect</h2>
        <p style={styles.text}>
          We may collect basic information such as name, email address, and usage
          data when you interact with our website.
        </p>

        <h2 style={styles.h2}>How We Use Information</h2>
        <p style={styles.text}>
          We use your information to improve our services, respond to queries, and
          enhance user experience.
        </p>

        <h2 style={styles.h2}>Cookies</h2>
        <p style={styles.text}>
          Our website may use cookies to improve functionality and analytics.
        </p>

        <h2 style={styles.h2}>Third-Party Services</h2>
        <p style={styles.text}>
          We may use third-party services like analytics and form providers. These
          services have their own privacy policies.
        </p>

        <h2 style={styles.h2}>Data Security</h2>
        <p style={styles.text}>
          We take reasonable steps to protect your data, but no method is 100%
          secure.
        </p>

        <h2 style={styles.h2}>Contact Us</h2>
        <p style={styles.text}>
          If you have any questions, contact us at: <br />
          <b>m.asadkhan515145@gmail.com</b>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    padding: "40px 15px",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    maxWidth: "900px",
    width: "100%",
    background: "#111827",
    padding: "30px",
    borderRadius: "14px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },
  h1: {
    color: "#60a5fa",
    fontSize: "32px",
    marginBottom: "10px",
  },
  h2: {
    color: "#38bdf8",
    marginTop: "25px",
  },
  text: {
    color: "#cbd5e1",
    lineHeight: "1.7",
    fontSize: "15px",
  },
};