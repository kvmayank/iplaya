import { Dispatch } from 'redux';
import IArt from '../models/art';
import * as types from './actionTypes';

export function loadArts() {
    return (dispatch: Dispatch) => {
        dispatch(loadArtsBegin());
        return fetch('/arts?limit=10')
            .then(
                response => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    return response;
                }
            )
            .then(res => res.json())
            .then(camps => {
                dispatch(loadArtsSuccess(camps));
            });
            // .catch(error => dispatch(fetchProductsFailure(error)));
    };
}

export function loadArtsSuccess(arts: IArt[]) {
    return {
        arts,
        type: types.LOAD_ARTS_SUCCESS
    };
}

export function loadArtsBegin() {  
    return {
        type: types.LOAD_ARTS_BEGIN
    };
}
