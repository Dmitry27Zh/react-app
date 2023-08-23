import CostItem from './CostItem'
import './Costs.css'
import Card from '../UI/Card'
import CostsFilter from './CostsFilter'
import { useState } from 'react'

const Costs = (props) => {
  const [year, setYear] = useState('2022')
  const { costs } = props
  const filterCosts = () => costs.filter((cost) => new Date(cost.date).getFullYear().toString() === year)
  const yearChangeHandler = (newYear) => {
    setYear(newYear)
  }

  return (
    <Card className="costs">
      <CostsFilter year={year} onYearChange={yearChangeHandler} />
      <div>
        {filterCosts(year).map((cost) => (
          <CostItem key={cost.id} date={cost.date} name={cost.name} price={cost.price} />
        ))}
      </div>
    </Card>
  )
}

export default Costs
