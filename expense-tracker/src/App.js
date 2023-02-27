import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expense, setExpense] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    let temp=0;
    for(let i=0; i < expense.length; i++) {
      temp += parseInt(expense[i].amount);
    }

    setTotalExpense(temp);

  }, [expense]);

  return (
    <div className="App">
      <Header totalExpense={totalExpense}></Header>
      <ExpenseForm expense={expense} setExpense={setExpense} />
      <ExpenseList expense={expense} setExpense={setExpense}/>
      

    </div>
  );
}

export default App;
