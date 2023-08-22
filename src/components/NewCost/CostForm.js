import { useState } from 'react'
import './CostForm.css'

const CostForm = () => {
  const [userInput, setUserInput] = useState({
    name: '',
    price: '',
    date: '',
  })
  const { name, price, date } = userInput
  const nameChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      name: event.target.value,
    })
  }
  const priceChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      price: event.target.value,
    })
  }
  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      date: event.target.value,
    })
  }

  return (
    <form>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label htmlFor="name">Name</label>
          <b>{name}</b>
          <input type="text" id="name" name="name" onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label htmlFor="price">Price</label>
          <b>{price}</b>
          <input type="number" id="price" name="price" min="0.01" step="0.01" onChange={priceChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label htmlFor="date">Date</label>
          <b>{date}</b>
          <input type="date" id="date" name="date" min="2019-01-01" max="2022-12-12" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-costs__actions">
        <button type="submit">Add</button>
        <button type="reset">Cancel</button>
      </div>
    </form>
  )
}

export default CostForm
