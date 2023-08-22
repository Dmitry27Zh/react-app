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

  return (
    <Card className="costs">
      <CostsFilter year={year} onYearChange={yearChangeHandler} />
      <div>
        {costs.map((cost, key) => (
          <CostItem key={key} date={cost.date} name={cost.name} price={cost.price} />
        ))}
      </div>
    </Card>
  )
}

export default Costs
