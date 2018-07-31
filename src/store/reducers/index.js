import { combineReducers } from 'redux';
import settings from './settings';
import board from './board';

const rootReducer = combineReducers({ settings, board });

export default rootReducer;
