import React from "react";
import CreateExpenseModalContainer from "../modals/create_expense_modal_container";
import { Link } from "react-router-dom";

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
  roundIt(num) {
    return num.toFixed(2)
  }

  totalBalance(){
    return this.roundIt(this.youAreOwed() - this.youOwe())
  }

  youOwe(){
    let myDebt = 0; 
    this.props.expenses.forEach((expense) => {
      if(this.props.currentUserId !== expense.payer_id){
         myDebt += (expense.amount / expense.expenders.length);
        console.log(`I owe ${expense.amount / expense.expenders.length}`)
      }
    })
    return this.roundIt(myDebt);
  }

  youAreOwed(){
    let loans = 0;
    let numberOfExpenders; 
    let amount; 
    let paidFor; 
    this.props.expenses.forEach((expense) => {
      if (this.props.currentUserId === expense.payer_id) {
        numberOfExpenders = expense.expenders.length;
        amount = expense.amount;
        paidFor = (amount * ((numberOfExpenders - 1) / numberOfExpenders));
        loans += paidFor;
        console.log(`I'm owed ${paidFor}`)
      }
    })
    return this.roundIt(loans);
  }

  getBalance(friendId) {
    let friendAmount = 0;
    let myAmount = 0;

    this.props.expenses.forEach((expense) => {

      if (expense.expenders.includes(this.props.currentUserId) && expense.expenders.includes(friendId)) {
        if (this.props.currentUserId === expense.payer_id) {
          myAmount += (expense.amount / expense.expenders.length);
          console.log(`I paid ${myAmount}`)
        }
        if (friendId === expense.payer_id) {
          friendAmount += (expense.amount / expense.expenders.length);
          console.log(`Friend paid ${friendAmount}`)
        }
      }

      console.log(expense);
    });

    return this.roundIt(myAmount - friendAmount);
    
  }

  getLoaners(){

  }



  render (){

    let debtors = this.props.users.filter((user) => {
        return this.getBalance(user.id) > 0
    }).map((user) => {
        user.balance = this.getBalance(user.id)
        return (
          <Link to={`/friends/${user.id}`} className="debtor-link">
            <div className="debtors">
              <div>{user.username}</div>
              <div>owes you {user.balance}</div>
            </div>
          </Link>
        ) 
    });

    let loaners = this.props.users.filter((user) => {
      return this.getBalance(user.id) < 0
    }).map((user) => {
      user.balance = this.getBalance(user.id)
      return (
        <Link to={`/friends/${user.id}`} className="loaner-link">
          <div className="loaners">
            <div>{user.username}</div>
            <div>you owe {user.balance}</div>
          </div>
        </Link>
      )
    });

    return (
      <div className="dashboard-wrap">
        <h1>Dashboard
          <div>
            <button className="add-expense" onClick={() => this.toggleModal()} >Add an expense</button>
            <button className="settle-button tooltip"> <span className="tooltiptext">We can settle after the bootcamp ;)</span>Settle up</button>
          </div> 
        </h1>
        <div className="dashboard-content-wrap">
          <div className="dashboard-summary-wrap">
              <div className="dashboard-summary-balance">
                <div>total balance</div>
                <div>{this.totalBalance()}</div>
              </div>
              <div className="dashboard-summary-owe">
                <div>you owe:</div>
                <div>{this.youOwe()}</div>
              </div>
              <div className="dashboard-summary-owed">
                <div>you are owed</div>
                <div>{this.youAreOwed()}</div>
              </div>
          </div>
          <div className="dashboard-column-titles-wrap">
              <div>YOU OWE</div>
              <div>YOU ARE OWED</div>
          </div>
          <div className="dashboard-people-wrap">
              <div>{loaners}</div>
              <div>{debtors}</div>
          </div>

          <CreateExpenseModalContainer 
            toggleModal={this.toggleModal}
            showModal={this.state.showModal}
          />
        </div>
      </div>
    )
  }
}
  

export default Dashboard;