import React, {useState} from 'react'

import './Expenses.css'
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

const [filteredYear, setFilteredYear] = useState('2020');

// Create a copy of the props (the items)
// Filter them by year
// Use that new const in mapping
const filteredExpenses = props.details
.filter(expense => {
  return expense.date.getFullYear().toString() === filteredYear;
});

const filterChangeHandler = selectedYear => {
  // console.log('Expenses.js');
  // console.log(selectedYear);
  setFilteredYear(selectedYear);
}

  return (
   <>
  
   <div className='expenses'>
   <ExpensesFilter onChangeFilter={filterChangeHandler}
   defaultYear={filteredYear} />
   
   <ExpensesChart expenses={filteredExpenses} />

   <ExpensesList items={filteredExpenses} />
      </div>
   </>
  )
}

export default Expenses