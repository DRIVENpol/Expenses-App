import React from 'react'

import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'

const NewExpenses = (props) => {

  const savedDataHandler = (enteredData) => {
    const _enteredData = {
      ...enteredData, // Copy "const expenseData" from ExpenseForm.js
      id: Math.random().toString() // Generate random id
    };
    console.log(_enteredData);

    // Lesson 59
    props.onAddExpense(_enteredData);
  }

  return (
    <div className='new-expense'>
    {/* 
    We pass the function as a prop to ExpenseForm.js 
    [Lesson 59]
    */}
    <ExpenseForm onSavedData={savedDataHandler} />
    </div>
  )
}

export default NewExpenses