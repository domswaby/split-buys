import React from "react";
import CreateExpenseModalContainer from "../../modals/create_expense_modal_container";

class MainDropDown extends React.Component {
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
            <>
                <div className="dropdown">
                    <button className="dropdown-toggle">{this.props.user.username}  <span>&#9660;</span></button>
                    <div className="dropdown-menu">
                        <a href="#">Add Friend</a>
                        <a onClick={() => this.toggleModal()}>Add Expense</a>
                        <a href="#" onClick={() => this.props.logout()}>Log Out</a>
                    </div>
                    <CreateExpenseModalContainer 
                        toggleModal={this.toggleModal}
                        showModal={this.state.showModal}
                    />
                </div>
            </>
        )
    }
}

export default MainDropDown; 