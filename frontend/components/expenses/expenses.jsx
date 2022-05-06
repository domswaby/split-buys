import React from "react";
import CreateExpenseModalContainer from "../modals/create_expense_modal_container";
import { RiTodoLine } from 'react-icons/ri';
import { ImCross } from 'react-icons/im';
import { FaComment } from 'react-icons/fa';
import EditExpenseModalContainer from "../modals/edit_expense_modal_container.js";

class Expenses extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showEditModal: false, 
      index: null
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleEditModal = this.toggleEditModal.bind(this);
  }

  toggleModal() {
    let show = this.state.showModal;
    this.setState({
      showModal: !show
    });
  }
  toggleEditModal(index) {
    let show = this.state.showEditModal;

    this.setState({
      showEditModal: !show,
      index: index
    });
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
      let expenses = this.props.expenses.map((expense, idx) => {
        return (
          <div key={idx}>
            <div onClick={() => this.toggleDetails(expense.id)}  className="expense-row">
              <div className="expenses-date">{expense.date_incurred}</div>
              <div className="expenses-description">{expense.description}</div>
              <div className="expenses-payer">
                <div>{this.payer(expense.payer_id)} paid:</div>
                <div>{expense.amount}</div>
              </div>
              <div className="expenses-lender">
                <div >{this.payer(expense.payer_id)} lent:</div>
                <div className={this.isPayer(expense) ? "payer-green" : "payer-orange"}>{this.lent(expense) ? this.lent(expense) : null}</div>
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
                  <button onClick={() => this.toggleEditModal(idx)} className="edit-expense-button">Edit expense</button>
                </div>
              </div>
              <div className="expense-details-bottom">
                <div className="expense-expender-list">
                  <ul>
                    {
                      expense.expenders?.map((expender, idx2) => {
                        return (
                          <li key={idx2} className="expense-expender-list-item"><span>{this.payer(expender)}</span> {this.expenderDetails(expense, expender)}</li>
                        )
                      })
                    }
                  </ul>
                </div>
                <div className="comment-section">
                  <h4>
                    <span>
                      <FaComment />
                    </span>
                    <span>
                      NOTES AND COMMENTS:
                    </span>
                  </h4>
                  <div>
                    <textarea name="comment-field" id="comment-field" cols="30" rows="5" placeholder="Add a comment"></textarea>
                  </div>
                </div>

              </div>
            </div>
              {this.state.index === idx &&                   
                <EditExpenseModalContainer
                  toggleModal={this.toggleEditModal}
                  showModal={this.state.showEditModal}
                  expense={expense}
                  
                />
              }
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