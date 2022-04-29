import React from "react";


const Expenses = () => {
  return (
    <div className="dashboard-wrap">
      <h1>All expenses
        <div>
          <button className="add-expense">Add an expense</button>
          <button className="settle-button">Settle up</button>
        </div>
      </h1>
    </div>
  )
}

export default Expenses; 