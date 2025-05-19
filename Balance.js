import React from 'react';

function Balance({ balance }) {
  return (
    <div>
      <h2>Balance</h2>
      <p>Your current balance is: ${balance.toFixed(2)}</p>
    </div>
  );
}

export default Balance;
