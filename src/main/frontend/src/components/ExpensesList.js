import React, { useEffect, useState } from 'react'
import Expense from './Expense'
// import expensesTemplates from '../data/expensesTemplates.json'
// import newExpensesData from '../data/expensesData.json'
import {Button} from "react-bootstrap";

function ExpensesList() {
    // const [expensesData, setExpensesData] = useState(expensesTemplates.list)
    // const [expenses, setExpenses] = useState(null)
    // const [isLoaded, setIsLoaded] = useState(false)
    //
    // // first loading
    // useEffect(() => {
    //     setExpensesData(() => {
    //         return expensesData.map(expense => {
    //             if (expense.id % 2 === 0) {
    //                 return {...expense,
    //                     // backgroundColor: "#f5f471",
    //                     backgroundColor: "#d7d7b3",
    //                     color: "#333333"
    //                 }
    //             } else {
    //                 return {...expense,
    //                     // backgroundColor: "#72722e",
    //                     backgroundColor: "#404039",
    //                     color: "#dddddd"
    //                 }
    //             }
    //         })
    //     })
    //     setIsLoaded(true)
    // }, [])
    //
    // useEffect(() => {
    //     if (isLoaded) {
    //         const expensesElements = expensesData.map(expense => {
    //             const { id, name, spent, budget, backgroundColor, color } = expense
    //             return <Expense key={id} name={name} spent={spent} budget={budget} backgroundColor={backgroundColor} color={color}/>
    //         })
    //         setExpenses(expensesElements)
    //     }
    // }, [expensesData])
    //
    // function updateExpenses() {
    //     setExpensesData(() => {
    //         const newExpanses = expensesData.map((item, itemId) => {
    //             const newExpense = newExpensesData.list.filter(expense => {
    //                 return expense.id == itemId
    //             })[0]
    //             if (newExpense == null) {
    //                 return item
    //             }
    //             return {...item,
    //                 spent: newExpense.spent,
    //                 budget: newExpense.budget
    //             }
    //         })
    //         return newExpanses
    //     })
    // }
    //
    // function updateSingleExpense(event) {
    //     const { id } = event.target
    //     setExpensesData(expanses => {
    //         const newExpanses = expensesData.map((item, itemId) => {
    //             if (itemId == id) {
    //                 const newExpense = newExpensesData.list.filter(expense => {
    //                     return expense.id == id
    //                 })[0]
    //                 return {...item, spent: newExpense.spent}
    //             } else {
    //                 return item
    //             }
    //         })
    //         return newExpanses
    //     })
    // }
    //
    // return (
    //     <div>
    //         {expenses}
    //         <Button variant="outline-dark btn-lg" onClick={updateExpenses}>Update</Button>
    //     </div>
    // )
}
export default ExpensesList