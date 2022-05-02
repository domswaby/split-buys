import React from "react";
import CreateExpenseModalContainer from "../modals/create_expense_modal_container";

class FriendShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.toggleModal = this.toggleModal.bind(this);

  }

  // componentDidMount() {
  //   if (this.props.currentUser.friends) {
  //     this.props.receiveCurrentUser(this.props.currentUser);
  //   }
  // }

  toggleModal() {
    let show = this.state.showModal;
    this.setState({
      showModal: !show
    });
  }
  payer(payer_id) {
    for (let user of this.props.users) {
      if (user.id === payer_id) {
        return user.username;
      }
    }
  }
  lent(expense) {
    let numberOfExpenders = expense.expenders.length;
    let amount = expense.amount;
    return amount - (amount * ((numberOfExpenders - 1) / numberOfExpenders));
  }

  getBalance() {
    let friendAmount = 0;
    let myAmount = 0;

    this.props.expenses.forEach((expense) => {
      console.log(`current user: ${this.props.currentUserId}`); 
      console.log(`payer_id: ${expense.payer_id}`); 
      console.log(`friendId: ${this.props.friendId}`)
      if (this.props.currentUserId == expense.payer_id) {
        myAmount += (expense.amount / expense.expenders.length);
      }
      if (this.props.friendId == expense.payer_id) {
        friendAmount += (expense.amount / expense.expenders.length);
      }
    });
    
    if (friendAmount > myAmount) {
      return (
        <div>You owe {this.props.friendInfo.username} {friendAmount - myAmount}</div>
      )
    } else {
      return (
        <div>{this.props.friendInfo.username} owes you {myAmount - friendAmount}</div>
      )
    }
  }

  render () {
    let friendId = this.props.friendId;
    let expenses = this.props.expenses.map((expense) => {
          
      if(expense.expenders.includes(Number(friendId))){
        
        return (
          <div className="expense-row">
            <p>{expense.date_incurred}</p>
            <p>{expense.description}</p>
            <p>{this.payer(expense.payer_id)} paid: {expense.amount}</p>
            <p>{this.payer(expense.payer_id)} lent: {this.lent(expense)}</p>

          </div>
        )
      }
    })

    return (
      <div className="dashboard-wrap">
        <h1>
          {this.props.friendInfo? (this.props.friendInfo.username.slice(0,1).toUpperCase() + this.props.friendInfo.username.slice(1).toLowerCase()) : null }
          <div>
            <button onClick={() => this.toggleModal()} className="add-expense">Add an expense</button>
            <button className="settle-button tooltip"> <span className="tooltiptext">We can settle after the bootcamp ;)</span>Settle up</button>
          </div>   
        </h1>
        <h2>{this.props.friendInfo ? this.getBalance() : null}</h2>
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

export default FriendShow;