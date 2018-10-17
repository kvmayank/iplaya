import * as React from 'react'
import { Link } from 'react-router-dom';
import IEvent from '../models/event';

interface IEventProps {
    events: IEvent[]
}

export default class EventsComponent extends React.Component<IEventProps, {}> {
  public render() {
    return (
        <div>
          <h1>Events</h1>
          <div className="event-list">
            {this.props.events.map(this.createListItem)}
          </div>
        </div>
      );
  }

  private createListItem(event: IEvent) {
    return (
      <div className="event" key={event._id}>
        <Link to="#">{event.title}</Link>
        <p>{event.description}</p>
      </div>
    );
  }
}
