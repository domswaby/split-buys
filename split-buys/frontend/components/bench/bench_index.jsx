import React from 'react';
import BenchIndexItem from "./bench_index_item";
import { selectBenches } from '../../selectors/selectors';

class BenchIndex extends React.Component {
  componentDidMount() {
    // request benches from your API here
    this.props.fetchBenches();
  }

  render() {
    const items = selectBenches(this.props.benches).map( bench => <BenchIndexItem key={bench.id} bench={bench} /> )
    return (
      <ul>
        {items}
      </ul>
    )
    // ...
  }
}

export default BenchIndex;