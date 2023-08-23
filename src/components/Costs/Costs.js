import './Costs.css'
import Card from '../UI/Card'
import CostsFilter from './CostsFilter'
import CostsList from './CostsList'
import Diagram from '../Diagram/Diagram'
import { useState } from 'react'

const Costs = (props) => {
  const [year, setYear] = useState('2022')
  const { costs } = props
  const yearChangeHandler = (newYear) => {
    setYear(newYear)
  }
  const filteredCosts = costs.filter((cost) => new Date(cost.date).getFullYear().toString() === year)
  const dataSets = [{ label: 'Jan', value: 1000, maxValue: 1000 }]

  return (
    <Card className="costs">
      <CostsFilter year={year} onYearChange={yearChangeHandler} />
      <Diagram dataSets={dataSets}></Diagram>
      <CostsList costs={filteredCosts}></CostsList>
    </Card>
  )
}

export default Costs
