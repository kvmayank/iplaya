import { Dispatch } from 'redux';
import * as types from './actionTypes';
import { SearchDomain } from '../store/layout/layoutState';

export function toggleLayoutSidebar() {
    return {type: types.LAYOUT_SIDEBAR_TOGGLE};
}

export function createActionForSearchDomainChange(domain: string) {
    return {
        domain,
        type: types.SEARCH_DOMAIN_CHANGE,        
    };
}

export function createActionForSearchQueryChange(query: string) {
    return {
        query,
        type: types.SEARCH_QUERY_CHANGE,        
    };
}

export function createActionForSearchBegin(query: string) {
    return {
        query,
        type: types.SEARCH_BEGIN,
    };
}

export function search(query: string, domain: SearchDomain) {
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
        
        return fetch(`/${domain}/search`, {
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
            dispatch(createActionForSearchSuccess(res, domain));
        });
        // .catch(error => dispatch(fetchProductsFailure(error)));
    };
}

export function createActionForSearchSuccess(documents: object[], domain: SearchDomain) {
    const actionObject = {
        'type': getDocumentsLoadedActionForDomain(domain)
    };
    actionObject[domain] = documents;
    return actionObject;
}

function getDocumentsLoadedActionForDomain(domain: SearchDomain) {
    switch (domain) {
        case SearchDomain.events:
            return types.LOAD_EVENTS_SUCCESS;
        case SearchDomain.camps:
            return types.LOAD_CAMPS_SUCCESS;
        case SearchDomain.arts:
            return types.LOAD_ARTS_SUCCESS;
    }
}