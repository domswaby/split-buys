import React from "react";
import logo from './../../../app/assets/images/split-wise-logo.png'; // with import
import { CgClose } from 'react-icons/cg';
import { RiTodoLine } from 'react-icons/ri';
import Multiselect from 'multiselect-react-dropdown';

class CreateExpenseModal extends React.Component {

    constructor(props){
        super(props); 
        console.log(props); 

    }
    
    render(){
        return (
            <div onClick={() => this.props.toggleModal()}
                className={'expense-modal-container ' + (this.props.showModal ? 'show' : '')}>
                {/* end of div     */}
                <div onClick={(e) => {
                    e.stopPropagation();
                }} className="expense-modal">
                
                    <h1>Add an expense
                        <button
                            onClick={() => this.props.toggleModal()}
                            className="close-expense-modal">
                            <CgClose />    
                        </button>
                    </h1>
                    <div className="multi-select">
                        <Multiselect />
                    </div>
                    

                    <div className="description-amount-wrap">
                        <div>
                            <RiTodoLine /> 
                        </div>
                        <div>
                            <div>
                                <input type="text" placeholder="Description:"/>
                            </div>
                            <div>
                                <span>$</span>
                                <input type="number" placeholder="0.00" min="1"/>
                            </div>
                        </div>
                    </div>

                    <div className="paid-by-wrap">
                        <p>
                            <span>Paid by </span> 
                            <select name="payer" id="payer-select">
                                <option value="you">You</option>
                            </select>
                            <span> and split equally.</span>
                        </p>
                    </div>
                   
                    <div className="expense-date-wrap">
                        <input type="date" />
                    </div>

                    <div className="save-cancel-wrap">
                        <button className="save-btn">
                            Save
                        </button>
                        <button className="cancel-btn" onClick={() => this.props.toggleModal()}>
                            Cancel
                        </button>

                    </div>
                </div>
            </div>
            
        )
    }
}

export default CreateExpenseModal; 