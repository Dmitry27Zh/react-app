import './CostItem.css'

function CostItem(props) {
  const { date, title, price } = props
  const month = date.toLocaleString('en', {
    month: 'long',
  })
  const year = date.getFullYear()
  const day = date.toLocaleString('en', {
    day: '2-digit',
  })

  return (
    <div className="cost-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="cost-item__description">
        <h2>{title}</h2>
        <div className="cost-item__price">${price}</div>
      </div>
    </div>
  )
}

export default CostItem
