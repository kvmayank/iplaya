import * as React from 'react'
import { Link } from 'react-router-dom';
import '../css/common.css'
import '../css/events.css'
import IEvent from '../models/event';
import ICamp from '../models/camp';

interface IProps {
    event: IEvent
}

export default class EventDetailsComponent extends React.Component<IProps, {}> {
    public render() {
        if (this.props.event !== undefined) {
            return (
                <div className="event" key={this.props.event.uid}>
                    <Link to={`/event/${this.props.event.uid}`}>{this.props.event.title}</Link>
                    <div className='eventDescription'>{this.props.event.description}</div>
                    <div className='eventMetaData float_clear'>
                    <div className='eventLocation float_left'>
                        {this.renderCamp(this.props.event.host_camp[0])}
                    </div>
                    <div className='eventType float_right'>
                        {this.props.event.event_type.label}
                    </div>
                    </div>
                </div>
            );
        } else {
            return <div>Loading ...</div>
        }
    }

  private renderCamp(camp: ICamp) {
      if (camp !== undefined) {
        return (
            <div className='hostCamp'>
              <Link to="#">{camp.name}</Link>
              <div>{camp.location_string}</div>
            </div>
        );
      }
      return <div />;
  }
}
