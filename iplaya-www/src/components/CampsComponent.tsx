import * as React from 'react'
import { Link } from 'react-router-dom';
import ICamp from '../models/camp';

interface ICampProps {
    camps: ICamp[]
}

export default class CampsComponent extends React.Component<ICampProps, {}> {
  public render() {
    return (
        <div>
          <h1>Camps</h1>
          <div className="camps-list">
            {this.props.camps.map(this.createListItem)}
          </div>
        </div>
      );
  }

  private createListItem(camp: ICamp) {
    return (
      <div className="camp" key={camp._id}>
        <Link to="#">{camp.title}</Link>
        <p>{camp.description}</p>
      </div>
    );
  }
}
