import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import ViewProject from './ViewProject';
import * as ViewProjectActions from './ViewProjectActions';

function mapStateToProps(state) {
  return state.viewProject.toJS();
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ViewProjectActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewProject)