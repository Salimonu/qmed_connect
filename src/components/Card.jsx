import { Children } from "react";

export default function Card({ icon, heading, description, children }) {
  return (
    <>
      <div>
        <p className="mb-3 flex justify-center">{icon}</p>
        <h3 className="mb-1 text-2xl">{heading}</h3>
        <p>{description}</p>
        {children}
      </div>
    </>
  );
}
