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
        <CostItem date={costs[0].date} name={costs[0].name} price={costs[0].price} />
        <CostItem date={costs[1].date} name={costs[1].name} price={costs[1].price} />
        <CostItem date={costs[2].date} name={costs[2].name} price={costs[2].price} />
      </div>
    </Card>
  )
}

export default Costs
