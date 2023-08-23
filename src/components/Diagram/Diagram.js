import DiagramBar from './DiagramBar'
import './Diagram.css'

const Diagram = (props) => {
  const { dataSets } = props
  const values = dataSets.map((dataSet) => dataSet.value)
  const maxValue = Math.max(...values)

  return (
    <div className="diagram">
      {dataSets.map(({ value, label }) => (
        <DiagramBar key={label} value={value} maxValue={maxValue} label={label} />
      ))}
    </div>
  )
}

export default Diagram
