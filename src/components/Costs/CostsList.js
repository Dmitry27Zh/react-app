import CostItem from './CostItem'
import './CostsList.css'

const CostsList = (props) => {
  const { costs } = props

  if (costs.length === 0) {
    return <h2 className="costs-list__fallback">No Costs...</h2>
  }

  return (
    <ul className="costs-list">
      {costs.map((cost) => (
        <CostItem key={cost.id} date={cost.date} name={cost.name} price={cost.price} />
      ))}
    </ul>
  )
}

export default CostsList
