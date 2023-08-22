import { useState } from 'react'
import './CostForm.css'

const CostForm = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [date, setDate] = useState('')
  const nameChangeHandler = (event) => {
    setName(event.target.value)
  }
  const priceChangeHandler = (event) => {
    setPrice(event.target.value)
  }
  const dateChangeHandler = (event) => {
    setDate(event.target.value)
  }
  const submitHandler = (event) => {
    event.preventDefault()
    const data = {
      name,
      price,
      date: new Date(date),
    }
    console.log(data)
  }

  return (
    <form onSubmit={submitHandler}>
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
