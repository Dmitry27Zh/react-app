import CostItem from './CostItem'
import './Costs.css'
import Card from '../UI/Card'
import CostsFilter from './CostsFilter'
import { useState } from 'react'

const Costs = (props) => {
  const [year, setYear] = useState('2022')
  const { costs } = props
  const filterCosts = (year) => costs.filter((cost) => new Date(cost.date).getFullYear().toString() === year)
  const [filteredCosts, setFilteredCosts] = useState([...costs])
  const yearChangeHandler = (newYear) => {
    setYear(newYear)
    setFilteredCosts(filterCosts(newYear))
  }

  return (
    <Card className="costs">
      <CostsFilter year={year} onYearChange={yearChangeHandler} />
      <div>
        {filteredCosts.map((cost) => (
          <CostItem key={cost.id} date={cost.date} name={cost.name} price={cost.price} />
        ))}
      </div>
    </Card>
  )
}

export default Costs
