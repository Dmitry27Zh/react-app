import './CostItem.css'

function CostItem(props) {
  const { date, title, price } = props

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
