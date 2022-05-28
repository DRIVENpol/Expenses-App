import React, {useState, useEffect} from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {

const [newTitle, setNewTitle] = useState('');
const [newAmount, setNewAmount] = useState('');
const [newDate, setNewDate] = useState('');

const [isOpen, setIsOpen] = useState('');


// const [userInput, setUserInput] = useState({
//     newTitle: '',
//     newAmount: '',
//     newDate: ''
// });


const titleChangeHandler = (event) => {
    // Option 1
    setNewTitle(event.target.value);

    // Option 2
    // setUserInput({
    //    ...userInput, // Copy the existing value
    //    newTitle: event.target.value // Override this value
    // })

    // Option 3 - the best for state snapshots
    // setUserInput((prevState) => {
    //     return {...prevState, newTitle: event.target.value}
    // });
}

const amountChangeHandler = (event) => {
    // Option 1
    setNewAmount(event.target.value);

    // Option 2
    // setUserInput({
    //    ...userInput, // Copy the existing value
    //    newAmount: event.target.value // Override this value
    // })
    
    // Option 3 - the best for state snapshots
    // setUserInput((prevState) => {
    //     return {...prevState, newAmount: event.target.value}
    // });
}

const dateChangeHandler = (event) => {
    // Option 1
    setNewDate(event.target.value);

    // Option 2
    // setUserInput({
    //    ...userInput, // Copy the existing value
    //    newDate: event.target.value // Override this value
    // })

    // Option 3 - the best for state snapshots
    // setUserInput((prevState) => {
    //     return {...prevState, newDate: event.target.value}
    // });
}

const submitHandler = (event) => {
    event.preventDefault(); // Prevent the reload on submit

    // Lesson 59
    const expenseData = {
        title: newTitle,
        amount: newAmount,
        date: new Date(newDate)
    };

    // Lesson 59
    props.onSavedData(expenseData);

    setNewTitle('');
    setNewAmount('');
    setNewDate('');

};

useEffect(() => {
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block" && isOpen === "block") {
      panel.style.display = "none";
      setIsOpen("none");
      
    } else {
      
      panel.style.display = "block";
      setIsOpen("block");
    }
  });
}
})


  return (
      <>
              <button className="accordion">
                  {isOpen === "block" ? (
                    <>Close</>
                  ):(<>Add New Expense</>)}</button>
              
<div className="panel">

        <form onSubmit={submitHandler}>

            <div className='new-expense__control'></div>

            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={newTitle} onChange={titleChangeHandler}/>
            </div>

            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' 
                    onChange={amountChangeHandler} value={newAmount}
                />
            </div>

            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2023-12-31'
                      onChange={dateChangeHandler}
                      value={newDate}
                />
            </div>

        <div className='new-expense__actions'>
        <center>
        <button type='submit'>Add Expense</button>
        </center>
           
        </div>

        </form>
    </div>

</>
  )
}

export default ExpenseForm