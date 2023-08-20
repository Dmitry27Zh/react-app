import './App.css'
import Costs from './components/costs/Costs'

const App = () => {
  const costs = [
    {
      date: new Date(2021, 12, 2),
      title: 'Fridge',
      price: '999.99',
    },
    {
      date: new Date(2022, 2, 1),
      title: 'MacBook',
      price: '1200',
    },
    {
      date: new Date(2022, 5, 6),
      title: 'Jeans',
      price: '20',
    },
  ]

  return (
    <div>
      <h1>Start learning React!</h1>
      <Costs costs={costs} />
    </div>
  )
}

export default App
