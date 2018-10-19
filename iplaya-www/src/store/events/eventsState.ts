import IEvent from '../../models/event'

export interface IEventsState {
    events: IEvent[],
    selectedEvent?: IEvent,
}
