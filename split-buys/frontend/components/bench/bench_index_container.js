import { connect } from "react-redux";
import { fetchBenches } from "../../actions/bench_actions.js";
import BenchIndex from "./bench_index.jsx";

const mapStateToProps = (state) => ({
  benches: state.entities.benches
}); 

const mapDispatchToProps = (dispatch) => ({
  fetchBenches: () => dispatch(fetchBenches())
}); 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);