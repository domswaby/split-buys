import React from "react";
import CreateExpenseModalContainer from "../modals/create_expense_modal_container";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
      
  }

  toggleModal() {
    let show = this.state.showModal;
    this.setState({
      showModal: !show
    });
  }

  render (){
    return (
      <div className="dashboard-wrap">
        <h1>Dashboard
          <div>
            <button className="add-expense" onClick={() => this.toggleModal()} >Add an expense</button>
            <button className="settle-button">Settle up</button>
          </div> 

        </h1>
        <div>
            <p>Content</p>
        </div>

        <CreateExpenseModalContainer 
          toggleModal={this.toggleModal}
          showModal={this.state.showModal}
        />

      </div>
    )
  }
}
  

export default Dashboard;