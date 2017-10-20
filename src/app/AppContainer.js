import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import App from './App';
import * as AppActions from './AppActions';

function mapStateToProps(state) {
  return state.app.toJS();
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)