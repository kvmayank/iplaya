import { Dispatch } from 'redux';
import IEvent from '../models/event';
import * as types from './actionTypes';


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

export function loadEventDetails(uid: string) {
    return (dispatch: Dispatch) => {
        return fetch(`/event/${uid}`)
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
                dispatch(loadEventDetailsSuccess(events[0]));
            });
            // .catch(error => dispatch(fetchProductsFailure(error)));
    };
}

export function loadEventsSuccess(events: IEvent[]) {
    return {
        events,
        type: types.LOAD_EVENTS_SUCCESS
    };
}

export function loadEventDetailsSuccess(event: IEvent) {
    return {
        event,
        type: types.LOAD_EVENT_DETAILS_SUCCESS
    };
}

export function loadEventsBegin() {  
    return {
        type: types.LOAD_EVENTS_BEGIN
    };
}
