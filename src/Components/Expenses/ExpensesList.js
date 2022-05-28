import React from 'react'

import ExpenseItem from './ExpenseItem'
import "./ExpensesList.css"

const ExpensesList = (props) => {

let _expenses = props.items;


  return (<>
    {_expenses.length === 0 ? 
        (<center><p><font color = 'white'>No expenses found!</font></p></center>)
        : 
        (_expenses.map(detail =>
         <div key={detail.id}>
         <ExpenseItem
         title={detail.title} 
         amount={detail.amount}
         date={detail.date}
          /></div>
          ))}
          </>)
}

export default ExpensesList