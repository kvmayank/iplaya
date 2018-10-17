import * as React from 'react'
import { Link } from 'react-router-dom';
import IArt from '../models/art';

interface IArtProps {
    arts: IArt[]
}

export default class ArtsComponent extends React.Component<IArtProps, {}> {
  public render() {
    return (
        <div>
          <h1>Arts</h1>
          <div className="arts-list">
            {this.props.arts.map(this.createListItem)}
          </div>
        </div>
      );
  }

  private createListItem(art: IArt) {
    return (
      <div className="art" key={art._id}>
        <Link to="#">{art.title}</Link>
        <p>{art.description}</p>
      </div>
    );
  }
}
