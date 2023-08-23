import CostItem from './CostItem'
import './Costs.css'
import Card from '../UI/Card'
import CostsFilter from './CostsFilter'
import { useState } from 'react'

const Costs = (props) => {
  const [year, setYear] = useState('2022')
  const { costs } = props
  const yearChangeHandler = (newYear) => {
    setYear(newYear)
  }
  const filteredCosts = costs.filter((cost) => new Date(cost.date).getFullYear().toString() === year)
  const renderCosts = () => {
    if (filteredCosts.length === 0) {
      return <p>No Costs...</p>
    }

    return filteredCosts.map((cost) => <CostItem key={cost.id} date={cost.date} name={cost.name} price={cost.price} />)
  }

  return (
    <Card className="costs">
      <CostsFilter year={year} onYearChange={yearChangeHandler} />
      <div>{renderCosts()}</div>
    </Card>
  )
}

export default Costs
