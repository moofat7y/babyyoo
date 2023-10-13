import React from "react";

export default function Section({ id, className, children }) {
  return (
    <section id={id} className={`py-[60px] ${className}`}>
      {children}
    </section>
  );
}
