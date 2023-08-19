import CostDate from './CostDate'
import './CostItem.css'
import Card from '../UI/Card'

function CostItem(props) {
  const { date, title, price } = props
  const changeDescriptionHandler = () => {
    console.log('Change description!')
  }

  return (
    <Card className="cost-item">
      <CostDate date={date} />
      <div className="cost-item__description">
        <h2>{title}</h2>
        <div className="cost-item__price">${price}</div>
        <button onClick={changeDescriptionHandler}>Change description</button>
      </div>
    </Card>
  )
}

export default CostItem
