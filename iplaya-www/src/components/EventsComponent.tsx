import * as React from 'react'
import '../css/common.css'
import '../css/events.css'
import IEvent from '../models/event';
import EventDetailsComponent from './EventDetailsComponent';

interface IEventProps {
    events: IEvent[]
}

export default class EventsComponent extends React.Component<IEventProps, {}> {
  public render() {
    if (this.props.events !== undefined) {
      return (
          <div>
            <h1>Events</h1>
            <div className="event-list">
              {this.props.events.map((event: IEvent) => <EventDetailsComponent event={event} key={event.uid} />)}
            </div>
          </div>
        );
    } else {
      return null;
    }
  }
}
