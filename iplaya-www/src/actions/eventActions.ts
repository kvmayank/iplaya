import { Dispatch } from 'redux';
import IEvent from '../models/event';


export function loadEvents() {
    return (dispatch: Dispatch) => {
        dispatch(loadEventsBegin());
        return fetch('/events?limit=10')
            .then(
                response => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    return response;
                }
            )
            .then(res => res.json())
            .then(events => {
                dispatch(loadEventsSuccess(events));
            });
            // .catch(error => dispatch(fetchProductsFailure(error)));
    };
}

export function loadEventsSuccess(events: IEvent[]) {
    console.log(events);
    return {
        events,
        type: 'LOAD_EVENTS_SUCCESS'
    };
}

export function loadEventsBegin() {  
    return {
        type: 'LOAD_EVENTS_BEGIN'
    };
}
