import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import Details from './Details';
import * as DetailsActions from './DetailsActions';

function mapStateToProps(state) {
  return state.details.toJS();
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(DetailsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)