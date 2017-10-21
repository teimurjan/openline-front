import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import NewProject from './NewProject';
import * as NewProjectActions from './NewProjectActions';

function mapStateToProps(state) {
  return state.newProject.toJS();
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(NewProjectActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProject)