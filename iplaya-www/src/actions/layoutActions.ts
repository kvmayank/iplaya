import { Dispatch } from 'redux';
import IEvent from '../models/event';
import * as types from './actionTypes';

export function toggleLayoutSidebar() {
    return {type: types.LAYOUT_SIDEBAR_TOGGLE};
}

export function createActionForSearchQueryChange(query: string) {
    return {
        query,
        type: types.LAYOUT_SEARCH_QUERY_CHANGE,        
    };
}

export function createActionForSearchBegin(query: string) {
    return {
        query,
        type: types.LAYOUT_SEARCH_BEGIN,
    };
}

export function searchEvents(query: string) {
    return (dispatch: Dispatch) => {
        dispatch(createActionForSearchBegin(query));

        const details = {
            'query': query,
        };
        const formBody = [];
        for (const property of Object.keys(details)) {
          const encodedKey = encodeURIComponent(property);
          const encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        
        return fetch('/events/search', {
          body: formBody.join("&"),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          method: 'POST'
        })
        .then(
            response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            }
        )
        .then(res => res.json())
        .then(res => {
            dispatch(createActionForSearchEventsSuccess(res));
        });
        // .catch(error => dispatch(fetchProductsFailure(error)));
    };
}

export function createActionForSearchEventsSuccess(events: IEvent[]) {
    return {
        events,
        type: types.LOAD_EVENTS_SUCCESS
    };
}