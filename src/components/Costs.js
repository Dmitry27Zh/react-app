import CostItem from './CostItem'
import './Costs.css'

function Costs(props) {
  const { costs } = props

  return (
    <div className="costs">
      <CostItem date={costs[0].date} title={costs[0].title} price={costs[0].price} />
      <CostItem date={costs[1].date} title={costs[1].title} price={costs[1].price} />
      <CostItem date={costs[2].date} title={costs[2].title} price={costs[2].price} />
    </div>
  )
}

export default Costs
