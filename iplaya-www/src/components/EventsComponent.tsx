import * as React from 'react'
import { Link } from 'react-router-dom';
import '../css/common.css'
import '../css/events.css'
import IEvent from '../models/event';
import ICamp from '../models/camp';

interface IEventProps {
    events: IEvent[]
}

export default class EventsComponent extends React.Component<IEventProps, {}> {
  public render() {
    return (
        <div>
          <h1>Events</h1>
          <div className="event-list">
            {this.props.events.map(this.createListItem.bind(this))}
          </div>
        </div>
      );
  }

  private createListItem(event: IEvent) {
    return (
      <div className="event" key={event.uid}>
        <Link to="#">{event.title}</Link>
        <div className='eventDescription'>{event.description}</div>
        <div className='eventMetaData float_clear'>
          <div className='eventLocation float_left'>
            {this.renderCamp(event.host_camp[0])}
          </div>
          <div className='eventType float_right'>
            {event.event_type.label}
          </div>
        </div>
      </div>
    );
  }

  private renderCamp(camp: ICamp) {
    return (
      <div className='hostCamp'>
        <Link to="#">{camp.name}</Link>
        <div>{camp.location_string}</div>
      </div>
    );
  }
}
