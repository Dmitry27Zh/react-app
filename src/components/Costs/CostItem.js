import CostDate from './CostDate'
import './CostItem.css'
import Card from '../UI/Card'
import { useState } from 'react'

const CostItem = (props) => {
  const [{ date, name, price }, setCost] = useState(props)
  const changeDescriptionHandler = () => {
    setCost({
      date,
      price,
      name: 'New title!',
    })
  }

  return (
    <Card className="cost-item">
      <CostDate date={date} />
      <div className="cost-item__description">
        <h2>{name}</h2>
        <div className="cost-item__price">${price}</div>
        <button onClick={changeDescriptionHandler}>Change description</button>
      </div>
    </Card>
  )
}

export default CostItem
