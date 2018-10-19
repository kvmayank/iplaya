import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { loadEventDetails } from '../actions/eventActions';
import IEvent from '../models/event';
import { IApplicationState } from '../store/applicationState';
import EventDetailsComponent from '../components/EventDetailsComponent';

interface IPropsFromRouter {
    match: {
        params: {
            uid: string
        }
    }
}

interface IProps {
    event: IEvent
}
  
interface IPropsFromDispatch {
    loadEventDetails: typeof loadEventDetails
}

class EventDetailsContainer extends React.Component<IProps & IPropsFromDispatch & IPropsFromRouter, {}> {
    public componentDidMount() {
        this.props.loadEventDetails(this.props.match.params.uid);
    }

    public render() {
        return (
            <EventDetailsComponent event={this.props.event} />
        );    
    }
}


const mapStateToProps = ({ events }: IApplicationState) => ({
    event: events.selectedEvent
})
  
const mapDispatchToProps = (dispatch: Dispatch) => ({
    loadEventDetails: bindActionCreators(loadEventDetails, dispatch)
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventDetailsContainer);
  