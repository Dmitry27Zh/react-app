import './CostForm.css'

const CostForm = () => {
  return (
    <form>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </div>
        <div className="new-cost__control">
          <label htmlFor="sum">Sum</label>
          <input type="number" id="sum" name="sum" min="0.01" step="0.01" />
        </div>
        <div className="new-cost__control">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" min="2019-01-01" max="2022-12-12" />
        </div>
      </div>
      <div className="new-costs__actions">
        <button type="submit">Add</button>
        <button type="reset">Cancel</button>
      </div>
    </form>
  )
}

export default CostForm
