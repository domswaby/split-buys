import React from "react";
import { CgClose } from 'react-icons/cg';
import { RiTodoLine } from 'react-icons/ri';
import Multiselect from 'multiselect-react-dropdown';

class CreateExpenseModal extends React.Component {

    constructor(props){
        super(props); 
        
        this.state = {
            optionTags: props.optionTags,
            description: props.expense.description,
            payer: props.payer,
            amount: props.expense.amount,
            date: props.expense.date_incurred
        }
        
        this.multiselectRef = React.createRef();
        this.onSelect = this.onSelect.bind(this);
        this.changeDate = this.changeDate.bind(this);
        this.changeDescription = this.changeDescription.bind(this);  
        this.changeAmount = this.changeAmount.bind(this);
        this.changePayer = this.changePayer.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
    //     this.props.receiveCurrentUser(this.props.currentUser);
    //         // .then((ele) => this.setState({ options: this.props.friends.concat({ username: "You" }) }));
    // }

    onRemove(e){
        
        this.setState({
            optionTags: e
        })
    }

    onSelect(e){
        this.setState({
            optionTags: e
        })
    }

    changeDate(e){
        
        this.setState({
            date: e.currentTarget.value
        })
    }

    changeAmount(e){
        this.setState({
            amount: e.currentTarget.value
        })
    }

    changeDescription(e){
        this.setState({
            description: e.currentTarget.value
        })
    }

    changePayer(e){
       
        this.setState({
            payer: e.currentTarget.value
        })
    }
    resetValues() {
        // Calling the below method will reset the selected values programatically
        this.multiselectRef.current.resetSelectedValues();
    }

    handleSubmit() {
        let payer_id = this.props.currentUserId
        let expenders = []
        
        for( let expender of this.state.optionTags){
            if(expender.username === "You"){
                expenders.push(this.props.currentUserId)
            }else{
                expenders.push(expender.id)
            }
        }
        if(this.state.payer !== "You"){
            for(let user of Object.values(this.props.users)){
                if(user.username === this.state.payer){
                    payer_id = user.id
                }
            }
        }
        let expenseInfo = {
            description: this.state.description,
            amount: this.state.amount, 
            split_type: 'equal', 
            date_incurred: this.state.date,
            payer_id: payer_id,
            expenders
        };
        if(this.props.formType === 'edit'){
            expenseInfo.id = this.props.expense.id; 
        }
        this.props.makeExpense(expenseInfo).then((res) => {

            this.props.toggleModal();
            

            if(this.props.formType === 'create'){
                let dropdown = document.getElementById('multi-select-component'); 
                // this.resetValues();
                dropdown.setAttribute('selectedvalues', [{username: "You"}]); 
              
                this.setState({
                    optionTags: [{username: "You"}],
                    description: "",
                    payer: "You",
                    amount: 1,
                    date: "",
                    preSelected: [{username: "You"}]

                });
               
                this.props.history.push("/expenses");
                this.props.history.push("/dashboard");
            }

        });
    }
    
    render(){
        let selectContents = null;
        if(this.props){
            selectContents = this.state.optionTags.map((option, idx) => {
                
                return (<option key={idx}>{option.username}</option>)
            })
        }
        return (
            <div   onClick={() => this.props.toggleModal()}
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
                    <div className="multi-select-wrap">
                        <Multiselect
                            id="multi-select-component"
                            ref={this.multiselectRef}
                            disable={this.props.formType === 'edit' ? true : false}
                            isObject={true}
                            displayValue="username"
                            disablePreSelectedValues={true}
                            selectedValues={[{username: "You"}]}
                            onKeyPressFn={function noRefCheck() { }}
                            onRemove={this.onRemove}
                            onSearch={function noRefCheck() { }}
                            onSelect={this.onSelect}
                            options={[...this.props.friends].concat({ username: "You" }) }
                            placeholder=" and..."
                        />
                    </div>
                    

                    <div className="description-amount-wrap">
                        <div>
                            <RiTodoLine /> 
                        </div>
                        <div>
                            <div>
                                <input type="text" value={this.state.description} onChange={this.changeDescription} placeholder="Description:"/>
                            </div>
                            <div>
                                <span>$</span>
                                <input type="number" value={this.state.amount} onChange={this.changeAmount} placeholder="0.00" min="1"/>
                            </div>
                        </div>
                    </div>

                    <div className="paid-by-wrap">
                        <p>
                            <span>Paid by </span> 
                            <select name="payer" id="payer-select" value={this.state.payer} onChange={this.changePayer}>
                                {selectContents}
                            </select>
                            <span> and split equally.</span>
                        </p>
                    </div>
                   
                    <div className="expense-date-wrap">
                        <input type="date" value={this.state.date} onChange={this.changeDate}/>
                    </div>

                    <div className="save-cancel-wrap">
                        <button className="save-btn" onClick={() => this.handleSubmit()}>
                            Save
                        </button>
                        <button className="cancel-btn" onClick={() => this.props.toggleModal()}>
                            Cancel
                        </button>

                    </div>
                    <div className="session-errors">
                        {
                            this.props.errors ?
                                this.props.errors.map(error => <p>{error}</p>)
                                :
                                null
                        }
                    </div>
                </div>
            </div>
            
        )
    }
}

export default CreateExpenseModal; 