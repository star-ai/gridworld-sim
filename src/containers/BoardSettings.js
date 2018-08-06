import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import BoardSettings from '../views/BoardSettings';

const mapStateToProps = state => ({
  gridSize: state.settings.gridSize,
  selectedFunction: state.settings.selectedFunction,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoardSettings);
