import './App.css'
import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost'

const App = () => {
  const costs = [
    {
      id: 'cost 1',
      date: new Date(2021, 12, 2),
      name: 'Fridge',
      price: '999.99',
    },
    {
      id: 'cost 2',
      date: new Date(2022, 2, 1),
      name: 'MacBook',
      price: '1200',
    },
    {
      id: 'cost 3',
      date: new Date(2022, 5, 6),
      name: 'Jeans',
      price: '20',
    },
  ]
  const addNewCostHandler = (costData) => {
    console.log(costData)
  }

  return (
    <div>
      <NewCost onAddNewCost={addNewCostHandler} />
      <Costs costs={costs} />
    </div>
  )
}

export default App
