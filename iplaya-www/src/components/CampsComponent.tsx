import * as React from 'react'
import { Link } from 'react-router-dom';
import ICamp from '../models/camp';
import '../css/camps.css'
import '../css/common.css'

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
      console.log(camp);
    return (
        <div className="camp" key={camp.uid}>
          <Link to="#">{camp.name}</Link>
          <div className='campDescription'>{camp.description}</div>
          <div className='campMetaData float_clear'>
            <div className='campLocation float_left'>
              {camp.location_string}
            </div>
            <div className='campType float_right'>
              {camp.contact_email}
            </div>
          </div>
        </div>
      );    
  }
}
