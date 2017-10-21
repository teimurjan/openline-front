import { connect } from "react-redux";
import NewProject from './NewProject';

function mapStateToProps(state) {
  return state.newProject.toJS();
}


export default connect(mapStateToProps)(NewProject)