import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import { login } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mSTP = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'signup'
}); 

const mDTP = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SignupForm);