import React from "react";
import CreateExpenseModalContainer from "../modals/create_expense_modal_container";
import { RiTodoLine } from 'react-icons/ri';
import { ImCross } from 'react-icons/im';



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

  toggleShowDelete(arg){
    return (e) => {
      let deleteButton = document.getElementById(`${arg + "a"}`); 
      if (deleteButton.style.display === 'inline') {
        deleteButton.style.display = 'none';
      } else {
        deleteButton.style.display = 'inline';
      }
    }
  }

  payer(payer_id){
    for(let user of this.props.users){
      if(user.id === payer_id){
        if(user.id === this.props.currentUserId){
          return "you";
        }else{
          return user.username; 
        }
      }
    }
  }

  lent(expense){
    let numberOfExpenders = expense.expenders?.length;
    let amount = expense.amount
    return this.roundIt(amount - ( amount * ((numberOfExpenders - 1) / numberOfExpenders)))
  }

  roundIt(num) {
    return num.toFixed(2)
  }
  isPayer(expense){
    if(expense.payer_id == this.props.currentUserId){
      
      return true; 
    }else{
      return false;
    }
  }
  toggleDetails(id) {
    let details = document.getElementById(`${id}`);
    if(details === null){

    }else if(details.style.display === 'inline'){
      details.style.display = 'none'; 
    }else{
      details.style.display = 'inline';
    }
  }
  expenderDetails(expense, expender){
    if(expender === expense.payer_id){
      return ` paid $${expense.amount} and owes ${this.roundIt(expense.amount / expense.expenders.length)}`;
    }else{ 
      return ` owes $${this.roundIt(expense.amount / expense.expenders.length)}`;
    }

  }
  handleDeleteExpense(expense){
    return (e) => {
      e.stopPropagation();
      console.log(expense);
      this.props.destroyExpense(expense.id); 

    };
  }

  render(){
      let expenses = this.props.expenses.map((expense) => {
        return (
          <div>
            <div onClick={() => this.toggleDetails(expense.id)}  onMouseEnter={this.toggleShowDelete(expense.id)} onMouseLeave={this.toggleShowDelete(expense.id)} className="expense-row">
              <div className="expenses-date">{expense.date_incurred}</div>
              <div className="expenses-description">{expense.description}</div>
              <div className="expenses-payer">
                <div>{this.payer(expense.payer_id)} paid:</div>
                <div>{expense.amount}</div>
              </div>
              <div className="expenses-lender">
                <div >{this.payer(expense.payer_id)} lent:</div>
                <div className={this.isPayer(expense) ? "payer-green" : "payer-orange"}>{this.lent(expense)}</div>
              </div>
              {/* keep ImCross as last child as styling depends on it */}
              <div id={expense.id + "a"} onClick={this.handleDeleteExpense(expense)} className="delete-expense-wrap">
                <ImCross />
              </div>
            </div>
            <div id={expense.id} className="expense-details-wrap">
              <div>
                <div className="expense-details-todo-icon">
                  <RiTodoLine />
                </div>
                <div className="expense-details-top">
                  <p >{expense.description}</p>
                  <p className="expense-details-amount">${expense.amount.toFixed(2)}</p>
                  <p className="expense-small-details">Paid by {this.payer(expense.payer_id)}</p>
                  <button className="edit-expense-button">Edit expense</button>
                </div>
              </div>
              <div className="expense-details-bottom">
                <div className="expense-expender-list">
                  <ul>
                    {
                      expense.expenders?.map((expender) => {
                        return (
                          <li className="expense-expender-list-item"><span>{this.payer(expender)}</span> {this.expenderDetails(expense, expender)}</li>
                        )
                      })
                    }
                  </ul>
                </div>
                <div className="comment-section">
                  Comment Section
                </div>

              </div>
            </div>
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