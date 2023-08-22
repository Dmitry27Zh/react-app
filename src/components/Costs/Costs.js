import CostItem from './CostItem'
import './Costs.css'
import Card from '../UI/Card'

const Costs = (props) => {
  const { costs } = props

  return (
    <Card className="costs">
      <CostItem date={costs[0].date} name={costs[0].name} price={costs[0].price} />
      <CostItem date={costs[1].date} name={costs[1].name} price={costs[1].price} />
      <CostItem date={costs[2].date} name={costs[2].name} price={costs[2].price} />
    </Card>
  )
}

export default Costs
