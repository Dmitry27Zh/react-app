import CostItem from './CostItem'
import './Costs.css'
import Card from '../UI/Card'

function Costs(props) {
  const { costs } = props

  return (
    <Card className="costs">
      <CostItem date={costs[0].date} title={costs[0].title} price={costs[0].price} />
      <CostItem date={costs[1].date} title={costs[1].title} price={costs[1].price} />
      <CostItem date={costs[2].date} title={costs[2].title} price={costs[2].price} />
    </Card>
  )
}

export default Costs
