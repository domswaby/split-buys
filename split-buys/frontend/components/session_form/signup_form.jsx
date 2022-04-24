import React from "react";
import { Link } from "react-router-dom";
import logo from './../../../app/assets/images/split-wise-logo.png';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user);
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            });
        };
    }

    render() {
        return (
            <>
                <div>
                    <a href="/" className="logo-link">
                        <img className="logo-link" src={logo} alt="logo" />
                        <span>SplitBuys</span>
                    </a>
                </div>
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.update('username')} />
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.update('password')} />
                    </label>
                    {
                        this.props.formType === 'signup' ?
                            (<label>Email:
                                <input type="text" value={this.state.email} onChange={this.update('email')} />
                            </label>)
                            : null
                    }


                    <button>{this.props.formType}</button>
                </form>
                <Link to={`/${this.props.formType === "login" ? "signup" : "login"}`}></Link>
                {
                    this.props.errors ?
                        this.props.errors.map(error => <p>{error}</p>)
                        :
                        ""
                }
            </>
        )
    }
}

export default SignupForm;