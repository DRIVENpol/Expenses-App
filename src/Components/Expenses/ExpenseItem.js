import React from 'react';

import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) => {


return (
  <Card>
    <div className='expense-item'>
    
    <ExpenseDate date={props.date}/>

    <div className='expense-item__description'>
    <h2>{props.title}</h2>
    </div>
    
    <div className='expense-item__price'>
   ${props.amount}
    </div>

    </div>
    </Card>
  )
}

export default ExpenseItem