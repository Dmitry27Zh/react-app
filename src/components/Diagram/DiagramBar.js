import './DiagramBar.css'

const DiagramBar = (props) => {
  const { value, maxValue, label } = props
  const height = `${(value / maxValue) * 100}%`

  return (
    <div className="diagram-bar">
      <div className="diagram-bar__inner">
        <div className="diagram-bar__fill" style={{ height }}></div>
      </div>
      <div className="diagram-bar__label">{label}</div>
    </div>
  )
}

export default DiagramBar
