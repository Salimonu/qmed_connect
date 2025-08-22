import { Link } from "react-router";

import Accordion from "./Accordion";
import faqs from "../assets/Faqs.json";

function Faqs() {
  return (
    <>
      <h1 className="mb-6 text-2xl font-semibold">
        ⁉️ Frequently Asked Questions About Airtime & Data Recharge
      </h1>
      <p className="mb-8 text-xl leading-10">
        Looking for the easiest way to buy cheap data and airtime online in
        Nigeria❓
        <br />
        At QMED Connect, we provide{" "}
        <strong>
          {" "}
          instant airtime top-ups and affordable data plans for MTN, Airtel,
          Glo, and 9mobile.
        </strong>{" "}
        <br />
        Our service is <strong> fast, secure, and available 24/7 </strong> —
        whether you’re recharging for yourself or sending to friends and family.{" "}
        <br />
        Below are the most frequently asked questions to help you get started.
      </p>
      <Accordion faqs={faqs} />
      <h2 className="mt-8 mb-2 text-2xl font-semibold">
        🚀 Ready to enjoy instant airtime and cheap data bundles at your
        fingertips?
      </h2>{" "}
      <p className="mb-8 text-xl leading-10">
        👉{" "}
        <Link to="/" className="font-bold underline hover:text-blue-900">
          Recharge now
        </Link>{" "}
        and experience fast, secure, and reliable top-ups in seconds!
      </p>
    </>
  );
}

export default Faqs;
