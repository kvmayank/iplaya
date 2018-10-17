import { Dispatch } from 'redux';
import ICamp from '../models/camp';
import * as types from './actionTypes';

export function loadCamps() {
    return (dispatch: Dispatch) => {
        dispatch(loadCampsBegin());
        return fetch('/camps?limit=10')
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
                dispatch(loadCampsSuccess(camps));
            });
            // .catch(error => dispatch(fetchProductsFailure(error)));
    };
}

export function loadCampsSuccess(camps: ICamp[]) {
    return {
        camps,
        type: types.LOAD_CAMPS_SUCCESS
    };
}

export function loadCampsBegin() {  
    return {
        type: types.LOAD_CAMPS_BEGIN
    };
}
