import { IArtsState } from './arts/artsState';
import { ICampsState } from './camps/campsState';
import { IEventsState } from './events/eventsState'
import { ILayoutState } from './layout/layoutState'

export interface IApplicationState {
    arts: IArtsState,
    camps: ICampsState,
    events: IEventsState,
    layout: ILayoutState
    
}
