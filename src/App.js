import './App.css'
import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost'

const App = () => {
  const costs = [
    {
      date: new Date(2021, 12, 2),
      name: 'Fridge',
      price: '999.99',
    },
    {
      date: new Date(2022, 2, 1),
      name: 'MacBook',
      price: '1200',
    },
    {
      date: new Date(2022, 5, 6),
      name: 'Jeans',
      price: '20',
    },
  ]

  return (
    <div>
      <NewCost />
      <Costs costs={costs} />
    </div>
  )
}

export default App
