import React from "react";
import CreateExpenseModalContainer from "../../modals/create_expense_modal_container";
import FriendModalContainer from "../../modals/friend_modal_container";

class MainDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showFriendModal: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleFriendModal = this.toggleFriendModal.bind(this);

    }

    toggleModal() {
        let show = this.state.showModal;
        this.setState({
            showModal: !show
        });
    }

    toggleFriendModal() {
        let show = this.state.showFriendModal;
        this.setState({
            showFriendModal: !show
        });
    }

    render () {
        return (
            <>
                <div className="dropdown">
                    <button className="dropdown-toggle">{this.props.user.username}  <span>&#9660;</span></button>
                    <div className="dropdown-menu">
                        <a onClick={() => this.toggleFriendModal()}>Add Friend</a>
                        <a onClick={() => this.toggleModal()}>Add Expense</a>
                        <a href="#" onClick={() => this.props.logout()}>Log Out</a>
                    </div>
                    <CreateExpenseModalContainer 
                        toggleModal={this.toggleModal}
                        showModal={this.state.showModal}
                        history={this.props.history}
                    />
                    <FriendModalContainer
                        toggleFriendModal={this.toggleFriendModal}
                        showFriendModal={this.state.showFriendModal}
                    />

                </div>
            </>
        )
    }
}

export default MainDropDown; 