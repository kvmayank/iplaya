export enum SearchDomain {
    events = 'events',
    camps = 'camps',
    arts = 'arts',
};

export interface ILayoutState {
    sidebarOpen: boolean,
    searchQuery: string,
    searchDomain: SearchDomain,
}
