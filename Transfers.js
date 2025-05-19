import React, { useState } from 'react';

function Transfers({ balance, setBalance }) {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');

  const handleTransfer = (e) => {
    e.preventDefault();
    const amt = parseFloat(amount);
    if (isNaN(amt) || amt <= 0) {
      setMessage('Please enter a valid amount.');
      return;
    }
    if (amt > balance) {
      setMessage('Insufficient balance.');
      return;
    }
    if (!recipient) {
      setMessage('Please enter a recipient.');
      return;
    }
    setBalance(balance - amt);
    setMessage(`Transferred $${amt.toFixed(2)} to ${recipient}.`);
    setAmount('');
    setRecipient('');
  };

  return (
    <div>
      <h2>Transfers</h2>
      <form onSubmit={handleTransfer}>
        <div>
          <label>Recipient: </label>
          <input value={recipient} onChange={(e) => setRecipient(e.target.value)} required />
        </div>
        <div>
          <label>Amount: </label>
          <input type="number" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <button type="submit">Transfer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Transfers;
