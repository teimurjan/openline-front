import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import CommonInformation from './CommonInformation';
import * as CommonInformationActions from './CommonInformationActions';
import {changeTab} from "../NewProjectActions";

function mapStateToProps(state) {
  return state.commonInformation.toJS();
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CommonInformationActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommonInformation)