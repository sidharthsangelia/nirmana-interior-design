"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (email.includes("@")) setSent(true);
  };

  return (
    <section className="px-6 lg:px-16 pb-44">
      <div
        className="max-w-2xl mx-auto p-12 lg:p-20 text-center"
        style={{ border: "1px solid var(--border)" }}
      >

        <span
          className="font-sans text-[8px] uppercase tracking-[0.42em] block mb-9"
          style={{ color: "var(--muted-foreground)" }}
        >
          Occasional Letters
        </span>

        <h2
          className="font-cormorant leading-[0.9] mb-7"
          style={{
            fontSize: "clamp(48px, 6vw, 84px)",
            fontWeight: 500,
            color: "var(--foreground)",
          }}
        >
          Thoughts from
          <br />
          <em className="font-light">the studio.</em>
        </h2>

        <p
          className="font-sans text-[13px] leading-[1.9] max-w-xs mx-auto font-light mb-12"
          style={{ color: "var(--muted-foreground)" }}
        >
          Rare dispatches on architecture, materiality,
          and spaces that endure quietly over time.
        </p>

        {sent ? (
          <p
            className="font-cormorant italic"
            style={{ fontSize: 28, color: "var(--muted-foreground)", fontWeight: 400 }}
          >
            Thank you. We'll write soon.
          </p>
        ) : (
          <>
            <div className="flex max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                className="flex-1 bg-transparent px-5 py-4 text-[13px] outline-none font-light"
                style={{
                  border: "1px solid var(--border)",
                  borderRight: "none",
                  color: "var(--foreground)",
                  fontFamily: "var(--font-sans)",
                }}
              />
              <button
                onClick={handleSubmit}
                className="px-7 py-4 transition-all duration-300"
                style={{
                  backgroundColor: "var(--foreground)",
                  color: "var(--background)",
                  border: "1px solid var(--foreground)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--foreground)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "var(--foreground)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--background)";
                }}
              >
                <span className="font-sans text-[7px] uppercase tracking-[0.42em]">
                  Subscribe
                </span>
              </button>
            </div>

            <span
              className="font-sans text-[8px] uppercase tracking-[0.2em] block mt-5"
              style={{ color: "var(--border)" }}
            >
              Infrequent · No noise
            </span>
          </>
        )}

      </div>
    </section>
  );
}