import React from "react";
import { Link } from "react-router-dom";
// import logo from './../../../app/assets/images/split-wise-logo.png';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoSubmit = this.demoSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user).then((res) => {
            this.props.history.push('/dashboard');
        });
    }
    demoSubmit(e) {
        e.preventDefault();
        const user = {
            username: "Demo User",
            password: "starwars"            
        }
        this.props.login(user).then((res) => {
            this.props.history.push('/dashboard');
        });
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
                <div className="signup-comp-wrap">
                    <div className="signup-logo-wrap">
                        <Link to="/">
                            <img src={window.logo} alt="logo" />
                        </Link>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <h1>INTRODUCE YOURSELF</h1>
                        <div className="signup-input-wrap">
                            <p>
                                Hi there! My name is
                            </p>
                            <input type="text" value={this.state.username} onChange={this.update('username')} />
                        </div>
                        <div className="signup-input-wrap">
                            <p>
                                Here's my <span>email address</span>:
                            </p>
                            <input type="text" value={this.state.email} onChange={this.update('email')} />
                        </div>
                        <div className="signup-input-wrap">
                            <p>
                                And here's my <span>password</span>:
                            </p>
                            <input type="password" value={this.state.password} onChange={this.update('password')} />
                        </div>
       
                        <button>Sign me up!</button>
                        <a onClick={this.demoSubmit}>Login as demo user</a>
                        <div className="session-errors">
                            {
                                this.props.errors ?
                                    this.props.errors.map(error => <p>{error}</p>)
                                    :
                                    ""
                            }
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default SignupForm;