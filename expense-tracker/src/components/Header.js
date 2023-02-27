import React from "react";

export default function Header({ totalExpense }) {
  return (
    <header>
      <h1>Expense Tracker</h1>
      <div className="total-expense">₹{totalExpense}</div>
    </header>
  );
}
