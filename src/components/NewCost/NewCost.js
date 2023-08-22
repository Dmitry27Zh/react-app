import CostForm from './CostForm'
import './NewCost.css'

const NewCost = (props) => {
  const { onAddNewCost } = props
  const saveCostDataHandler = (inputData) => {
    const costData = {
      ...inputData,
      id: Math.random().toString(),
    }
    onAddNewCost(costData)
  }
  return (
    <div className="new-cost">
      <CostForm onSaveCostData={saveCostDataHandler} />
    </div>
  )
}

export default NewCost
