import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { loadEvents } from '../actions/eventActions';
import { createActionForSearchDomainChange, createActionForSearchQueryChange, search } from '../actions/layoutActions';
import IEvent from '../models/event';
import { IApplicationState } from '../store/applicationState';
import { SearchDomain } from '../store/layout/layoutState'

import EventsComponent from '../components/EventsComponent';

interface IEventProps {
    events: IEvent[],
    searchQuery: string,
    searchDomain: SearchDomain,
}
  
interface IEventPropsFromDispatch {
    loadEvents: typeof loadEvents,
    search: typeof search,
    createActionForSearchQueryChange: typeof createActionForSearchQueryChange;
    createActionForSearchDomainChange: typeof createActionForSearchDomainChange;
}

class EventsContainer extends React.Component<IEventProps & IEventPropsFromDispatch, {}> {
    public componentDidMount() {
        if (this.props.searchDomain === SearchDomain.events && this.props.searchQuery.length > 0) {
            this.props.search(this.props.searchQuery, this.props.searchDomain);
        } else {
            this.props.createActionForSearchDomainChange(SearchDomain.events);
            this.props.createActionForSearchQueryChange('');
            this.props.loadEvents();
        }
    }

    public render() {
        return (
            <EventsComponent events={this.props.events} />
        );    
    }
}


const mapStateToProps = ({ events, layout }: IApplicationState) => ({
    events: events.events,
    searchDomain: layout.searchDomain,
    searchQuery: layout.searchQuery,    
})
  
const mapDispatchToProps = (dispatch: Dispatch) => ({
    createActionForSearchDomainChange: bindActionCreators(createActionForSearchDomainChange, dispatch),
    createActionForSearchQueryChange: bindActionCreators(createActionForSearchQueryChange, dispatch),
    loadEvents: bindActionCreators(loadEvents, dispatch),
    search: bindActionCreators(search, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventsContainer);
  