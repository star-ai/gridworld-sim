import { connect } from 'react-redux';
import ButtonsPanel from '../views/ButtonsPanel';

const mapStateToProps = state => ({
  isRunning: state.board.isRunning,
});

const mapDispatchToProps = dispatch => ({
  onNextClicked: () => console.log('Next'),
  onStartStopClicked: () => console.log('Start'),
  onResetClicked: () => console.log('Reset'),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsPanel);
