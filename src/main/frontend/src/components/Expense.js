import React, { useState, useEffect } from 'react'
import '../styles/Expense.css'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'

function Expense(props) {
    const {name, spent, budget, backgroundColor, color} = props
    const defaultStyle = {
        padding: '3em',
        paddingTop: '1em',
        fontWeight: '500',
        backgroundColor: backgroundColor,
        color: color,
        margin: '10px'
    }
    const [ expenseStyle, setExpenseStyle ] = useState(defaultStyle)
    const [ isExpanded, setIsExpanded ] = useState(false)
    const [ spentMoney, setSpentMoney ] = useState(0)
    const [ lastExpense, setLastExpense ] = useState('')
    
    // kinda workaround - I can change it, and it change when new spent arrives
    useEffect(() => {
        setSpentMoney(spent)
    }, [spent])

    const expand = () => {
        if (isExpanded) {
            setExpenseStyle({...expenseStyle,
                height: 'auto'
            })
            setIsExpanded(false)
        } else {
            setExpenseStyle({...expenseStyle,
                height: '15em'
            })
            setIsExpanded(true)
        }
    }

    const handleLastExpenseChange = event => {
        const value = event.target.value
        if (isNaN(value) || value > 99999) {
            return
        }
        setLastExpense(value)
    }

    const addExpense = event => {
        event.stopPropagation()
        event.preventDefault()
        setSpentMoney(Number(spentMoney) + Number(lastExpense))
        setLastExpense('')
        expand()
    }

    const expandableForm = () => {
        if (isExpanded) {
            return (
                <InputGroup className="mb-3 justify-content-center">
                    <FormControl
                        className="col-lg-6"
                        placeholder="New expense"
                        aria-describedby="basic-addon2"
                        onClick={e => e.stopPropagation()}
                        onChange={handleLastExpenseChange}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-light bg-dark" onClick={addExpense}>Button</Button>
                    </InputGroup.Append>
                </InputGroup>
            )
        } else {
            return null
        }
    }

    return (
        <div className="expense" onClick={expand} style={expenseStyle}>
            <h1>{name}</h1>
            <progress id="budgetBar" value={spentMoney} max={budget} />
            <div>
                <p className="alignLeft" style={{color: color}} >Total: {budget}</p>
                <p className="alignRight" style={{color: color}} >Left {budget - spentMoney}</p>
            </div>
            {expandableForm()}
        </div>        
    )
} 
export default Expense