import {combineReducers} from 'redux';
import { IApplicationState } from '../store/applicationState';
import { artsReducer } from './artsReducer';
import { campsReducer } from './campsReducer'
import { eventsReducer } from './eventsReducer'
import { layoutReducer } from './layoutReducer'

const rootReducer = combineReducers<IApplicationState>({
    arts: artsReducer,
    camps: campsReducer,
    events: eventsReducer,
    layout: layoutReducer,
})
  
export default rootReducer;