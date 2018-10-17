import {combineReducers} from 'redux';
import { IApplicationState } from '../store/applicationState';
import { eventsReducer } from './eventsReducer'
import { layoutReducer } from './layoutReducer'


const rootReducer = combineReducers<IApplicationState>({
    events: eventsReducer,
    layout: layoutReducer,
})
  
export default rootReducer;