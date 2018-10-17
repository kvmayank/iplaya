import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { loadEvents } from '../actions/eventActions';
import IEvent from '../models/event';
import { IApplicationState } from '../store/applicationState';

import EventsComponent from '../components/EventsComponent';

interface IEventProps {
    events: IEvent[]
}
  
interface IEventPropsFromDispatch {
    loadEvents: typeof loadEvents
}

class EventsContainer extends React.Component<IEventProps & IEventPropsFromDispatch, {}> {
    public componentDidMount() {
        this.props.loadEvents();
    }

    public render() {
        return (
            <EventsComponent events={this.props.events} />
        );    
    }
}


const mapStateToProps = ({ events }: IApplicationState) => ({
    events: events.events
})
  
const mapDispatchToProps = (dispatch: Dispatch) => ({
    loadEvents: bindActionCreators(loadEvents, dispatch)
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventsContainer);
  