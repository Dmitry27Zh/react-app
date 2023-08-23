import DiagramBar from './DiagramBar'
import './DiagramBar.css'

const Diagram = (props) => {
  const { dataSets } = props

  return (
    <div className="diagram">
      {dataSets.map(({ value, maxValue, label }) => (
        <DiagramBar key={label} value={value} maxValue={maxValue} label={label} />
      ))}
    </div>
  )
}

export default Diagram
