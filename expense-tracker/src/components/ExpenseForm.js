import React, { useRef } from "react";

export default function ExpenseForm({expense, setExpense}) {
  const desc = useRef(null);
  const date = useRef(null);
  const amount = useRef(null);

  const AddExpense = e => {
    e.preventDefault();

    let d = date.current.value.split("-");
    let newD = new Date(d[0], d[1] - 1, d[2]);

    setExpense([...expense, {
        "desc": desc.current.value,
        "amount": amount.current.value,
        "date": newD.getTime(),
      }]);

    desc.current.value = "";
    amount.current.value = null;
    date.current.value = null;
  }
  return (
    <div>
      <form className="expense-form" onSubmit={AddExpense}>
        <div className="form-inner">
          <input
            type="text"
            name="desc"
            id="desc"
            placeholder="Expense Description..."
            ref={desc}
          />
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Amount..."
            ref={amount}
          />
          <input
            type="date"
            name="date"
            id="date"
            placeholder="Expense date..."
            ref={date}
          />
          <input type="submit" value="Add Expense" />
        </div>
      </form>
    </div>
  );
}
