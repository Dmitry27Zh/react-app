import './Costs.css'
import Card from '../UI/Card'
import CostsFilter from './CostsFilter'
import CostsList from './CostsList'
import { useState } from 'react'

const Costs = (props) => {
  const [year, setYear] = useState('2022')
  const { costs } = props
  const yearChangeHandler = (newYear) => {
    setYear(newYear)
  }
  const filteredCosts = costs.filter((cost) => new Date(cost.date).getFullYear().toString() === year)

  return (
    <Card className="costs">
      <CostsFilter year={year} onYearChange={yearChangeHandler} />
      <CostsList costs={filteredCosts}></CostsList>
    </Card>
  )
}

export default Costs
