import './CostsFilter.css'

const CostsFilter = (props) => {
  const { year, onYearChange } = props
  const yearChangeHandler = (event) => {
    onYearChange(event.target.value)
  }

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Filter by year</label>
        <select value={year} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  )
}

export default CostsFilter
