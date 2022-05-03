import React from "react";
import CreateExpenseModalContainer from "../modals/create_expense_modal_container";


class Expenses extends React.Component {

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

  payer(payer_id){
    for(let user of this.props.users){
      if(user.id === payer_id){
        return user.username
      }
    }
  }

  lent(expense){
    let numberOfExpenders = expense.expenders.length;
    let amount = expense.amount
    return this.roundIt(amount - ( amount * ((numberOfExpenders - 1) / numberOfExpenders)))
  }

  roundIt(num) {
    return num.toFixed(2)
  }

  render(){
      let expenses = this.props.expenses.map((expense) => {
        
        
        return (
          
          <div className="expense-row">
            <p>{expense.date_incurred}</p>
            <p>{expense.description}</p>
            <p>{this.payer(expense.payer_id)} paid: {expense.amount}</p>
            <p>{this.payer(expense.payer_id)} lent: {this.lent(expense)}</p>
            
          </div>
        )
      })
      return (
        <div className="dashboard-wrap">
          <h1>All expenses
            <div>
              <button onClick={() => this.toggleModal()} className="add-expense">Add an expense</button>
              <button className="settle-button tooltip"> <span className="tooltiptext">We can settle after the bootcamp ;)</span>Settle up</button>
            </div>
          </h1>
          <div>
            {expenses}
          </div>
          <CreateExpenseModalContainer 
            toggleModal={this.toggleModal}
            showModal={this.state.showModal}
          />
        </div>
      )
  }
}

export default Expenses; 