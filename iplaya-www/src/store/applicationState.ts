import { IEventsState } from './events/eventsState'
import { ILayoutState } from './layout/layoutState'

export interface IApplicationState {
    events: IEventsState,
    layout: ILayoutState
    
}
