import './DiagramBar.css'

const DiagramBar = (props) => {
  const { value, maxValue, label } = props

  return (
    <div className="diagram-bar">
      <div>{value}</div>
      <div>{maxValue}</div>
      <div>{label}</div>
    </div>
  )
}

export default DiagramBar
