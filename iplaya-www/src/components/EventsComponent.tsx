import * as React from 'react'
import { Link } from 'react-router-dom';
import IEvent from '../models/event';

interface IEventProps {
    events: IEvent[]
}

export default class EventsComponent extends React.Component<IEventProps, {}> {
  public render() {
    return (
        <ul className="event-list">
          {this.props.events.map(this.createListItem)}
        </ul>
      );
  }

  private createListItem(event: IEvent) {
    return (
      <li>
        <Link to="#">{event.title}</Link>
      </li>
    );
  }
}
