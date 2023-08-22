import CostDate from './CostDate'
import './CostItem.css'
import Card from '../UI/Card'

const CostItem = (props) => {
  const { date, name, price } = props

  return (
    <Card className="cost-item">
      <CostDate date={date} />
      <div className="cost-item__description">
        <h2>{name}</h2>
        <div className="cost-item__price">${price}</div>
      </div>
    </Card>
  )
}

export default CostItem
