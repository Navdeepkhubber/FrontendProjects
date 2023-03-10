import React from 'react';

export default function ExpenseItem({expense, index, removeExpense}) {
    let date = new Date(expense.date);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const removeHandle = i => {
        removeExpense(i);
    }
  return (
    <div className='expense-item'>
        <button className='remove-item' onClick={() => removeHandle(index)}>x</button>
        <div className='desc'>{expense.desc}</div>
        <div className='amount'>₹{expense.amount}</div>
        <div className='date'>{day + "/" + month + "/" + year}</div>      
    </div>
  )
}
