import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Board from '../views/Board';
import * as actions from '../store/actions';

const mapStateToProps = state => ({
  values: state.board.stateValues,
  boardSize: state.settings.gridSize,
  selectedValues: state.settings.endStateIndices,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
