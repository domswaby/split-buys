import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard-wrap">
      <h1>Dashboard
        <div>
          <button className="add-expense">Add an expense</button>
          <button className="settle-button">Settle up</button>
        </div> 
      </h1>
      <div>
          <p>Content</p>
      </div>
      
    </div>
  )
}

export default Dashboard; 