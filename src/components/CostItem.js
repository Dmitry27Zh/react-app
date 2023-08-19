import CostDate from './CostDate'
import './CostItem.css'
import Card from './Card'

function CostItem(props) {
  const { date, title, price } = props

  return (
    <Card className="cost-item">
      <CostDate date={date} />
      <div className="cost-item__description">
        <h2>{title}</h2>
        <div className="cost-item__price">${price}</div>
      </div>
    </Card>
  )
}

export default CostItem
