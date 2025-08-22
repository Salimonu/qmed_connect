import { useState } from "react";

function VirtualAccountForm() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    user_id: "",
  });
  const [account, setAccount] = useState(null);

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const res = await fetch("http://127.0.0.1:8000/create-virtual-account/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setAccount(data.virtual_account);
  };

  return (
    <div className="form-container">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="full_name"
            onChange={handleChange}
            placeholder="Full Name"
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="text"
            name="user_id"
            onChange={handleChange}
            placeholder="User ID"
          />
          <button type="submit">Create Virtual Account</button>
        </form>

        {account && (
          <div>
            <h3>Virtual Account Created!</h3>
            <p>bank: {account.accounts[0].bankName}</p>
            <p>Account Number: {account.accounts[0].accountNumber}</p>
            <p> Account Name: {account.accountName}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default VirtualAccountForm;
