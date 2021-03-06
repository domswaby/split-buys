import React from "react";
import { Link } from "react-router-dom";
import HomeHeader from "../home/home_header";
import Footer from "../footer/footer";

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoSubmit = this.demoSubmit.bind(this);
  }

  handleSubmit(e){
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
    this.props.processForm(user).then((res) => {
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
  
  render () {
    
   return (
    <>
      <HomeHeader />
      <div className="login-wrap">
        <div className="form-wrap">
          <form onSubmit={this.handleSubmit}>
            <h1>Login</h1>
            <div className="login-field-wrap">
              <label>
                <p>
                  Username
                </p>
                <input type="text" value={this.state.username} onChange={this.update('username')}/>
              </label>
            </div>
            <div className="login-field-wrap">
              <label>
                <p>
                    Password 
                </p> 
                <input type="password" value={this.state.password} onChange={this.update('password')}/>
              </label>
            </div>
            <button>Login</button>
            <a onClick={this.demoSubmit}>Login as demo user</a>
            <div className="session-errors">
              {
                
                this.props.errors ? 
                  this.props.errors.map( error => <p>{error}</p>)
                    :
                  ""
              }
            </div>
          </form>
        </div>
        <Link to={`/${this.props.formType === "login" ? "signup" : "login"}`}></Link>
       </div>
       <Footer />
     </>
   )
  }
}

export default SessionForm;