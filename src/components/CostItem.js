import './CostItem.css'

function CostItem() {
  const date = new Date(2021, 12, 2)
  const title = 'Fridge'
  const price = '999.99'

  return (
    <div className="cost-item">
      <div>{date.toLocaleDateString('ru')}</div>
      <div className="cost-item__description">
        <h2>{title}</h2>
        <div className="cost-item__price">${price}</div>
      </div>
    </div>
  )
}

export default CostItem
