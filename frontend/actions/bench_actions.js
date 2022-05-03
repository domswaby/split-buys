import * as API_Util from "../util/bench_api_util";

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES'; 

const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES, 
  benches
}); 

export const fetchBenches = () => dispatch => {
  return API_Util.fetchBenches()
    .then( benches => dispatch(receiveBenches(benches))); 
}; 

