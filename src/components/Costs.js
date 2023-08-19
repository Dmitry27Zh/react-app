import CostItem from './CostItem'

function Costs() {
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
      <CostItem date={costs[0].date} title={costs[0].title} price={costs[0].price} />
      <CostItem date={costs[1].date} title={costs[1].title} price={costs[1].price} />
      <CostItem date={costs[2].date} title={costs[2].title} price={costs[2].price} />
    </div>
  )
}

export default Costs
