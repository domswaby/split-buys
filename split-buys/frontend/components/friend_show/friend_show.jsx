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

  toggleModal() {
    let show = this.state.showModal;
    this.setState({
      showModal: !show
    });
  }

  render () {
    return (
      <div className="dashboard-wrap">
        <h1>
          {this.props.friendInfo? (this.props.friendInfo.username.slice(0,1).toUpperCase() + this.props.friendInfo.username.slice(1).toLowerCase()) : null }
          <div>
            <button onClick={() => this.toggleModal()} className="add-expense">Add an expense</button>
            <button className="settle-button">Settle up</button>
          </div>   
        </h1>
        <CreateExpenseModalContainer
          toggleModal={this.toggleModal}
          showModal={this.state.showModal}
        />
      </div>
    )
  }
}

export default FriendShow;