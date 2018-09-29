import React, { Component } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import ButtonsPanel from '../views/ButtonsPanel';
import { setNextFunctionState } from '../store/actions';

const mapStateToProps = state => ({
  isRunning: state.board.isRunning,
  settings: state.settings,
  func: state.board.func,
});

// const mapDispatchToProps = dispatch => ({
//   onNextClicked: getNextFunctionState,
// });

class ButtonsPanelContainer extends Component {
  constructor(props) {
    super(props);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  handleNextClick() {
    const { settings, func, isRunning } = this.props;
    this.props.dispatch(setNextFunctionState(settings, func, isRunning));
  }

  render() {
    const { isRunning } = this.props;
    return (
      <ButtonsPanel
        isRunning={isRunning}
        onNextClicked={this.handleNextClick}
        onStartStopClicked={() => console.log('Start clicked')}
        onResetClicked={() => console.log('Reset clicked')}
      />
    );
  }
}
ButtonsPanelContainer.propTypes = {
  settings: T.objectOf(T.shape).isRequired,
  dispatch: T.func.isRequired,
  isRunning: T.bool,
  func: T.func,
};
ButtonsPanelContainer.defaultProps = {
  isRunning: false,
  func: null,
};

export default connect(mapStateToProps)(ButtonsPanelContainer);
