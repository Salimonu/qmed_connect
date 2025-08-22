// import axios from "axios";
import "../style.css";
import { useState } from "react";

export default function ElectricityForm({ wallet, setWallet }) {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [network, setNetwork] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!phone || !network || !amount) {
      setMessage({
        text: "Please fill in all fields correctly.",
        type: "error",
      });
      return;
    }

    const amt = parseFloat(amount);

    if (amt < 100) {
      setMessage({ text: "Minimum recharge amount is #100.", type: "error" });
      return;
    }

    if (wallet < amt) {
      setMessage({
        text: `Insufficient wallet balance (#${wallet}).`,
        type: "error",
      });
      return;
    }

    // Simulate recharge success
    setWallet(wallet - amt);
    setMessage({
      text: `
  ☑️ Recharge Successful!
  #${amt} airtime sent to 
  ${phone} on
  ${network}
  Wallet Balance: #${wallet - amt}
  `,
      type: "success",
    });

    // Clear form
    setPhone("");
    setNetwork("");
    setAmount("");
  };

  //   try {
  //     const res = await axios.post("/pay", {
  //       phone,
  //       amount,
  //     });
  //     alert(res.data.message);
  //   } catch (err) {
  //     console.error("Error:", err);
  //   }
  // };

  return (
    <>
      <div className="form-container">
        <div className="container">
          <h1 className="heading-primary">Buy Electricity Unit</h1>

          <form className="form" action="" onSubmit={handleSubmit}>
            <label className="label" htmlFor="phone">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="e.g. 08101747514"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <label className="label" htmlFor="amount">
              Amount (#):
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g. 100"
              required
            />

            <label className="label" htmlFor="meter">
              Meter Number:
            </label>
            <input
              type="number"
              id="meter"
              placeholder="e.g. 143756432349"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <button type="submit">Recharge Now</button>

            {message.text && (
              <p className={`message ${message.type}`}>{message.text}</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
