import { useState, useEffect } from "react";

export default function Darktoggl() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      style={{
        padding: "6px 12px",
        borderRadius: "6px",
        cursor: "pointer",
        border: "none",
      }}
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}