import { useState } from 'react'
import CostForm from './CostForm'
import './NewCost.css'

const NewCost = (props) => {
  const { onAddNewCost } = props
  const [formShowed, setFormShowed] = useState(false)
  const saveCostDataHandler = (inputData) => {
    const costData = {
      ...inputData,
      id: Math.random().toString(),
    }
    onAddNewCost(costData)
  }
  const addHandler = () => {
    setFormShowed(true)
  }
  const cancelHandler = () => {
    setFormShowed(false)
  }
  const renderButton = () => {
    if (!formShowed) {
      return (
        <button type="button" onClick={addHandler}>
          Add new cost
        </button>
      )
    }
  }
  const renderCostForm = () => {
    if (formShowed) {
      return <CostForm onSaveCostData={saveCostDataHandler} onCancel={cancelHandler} />
    }
  }
  return (
    <div className="new-cost">
      {renderButton()}
      {renderCostForm()}
    </div>
  )
}

export default NewCost
