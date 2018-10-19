import * as React from 'react'
import { Link } from 'react-router-dom';
import IArt from '../models/art';
import '../css/arts.css'
import '../css/common.css'

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
    console.log(art);
    return (
        <div className="art" key={art.uid}>
            <div className='float_clear'>
                <div className='float_left padded_8'><img src={art.images[0].thumbnail_url} height={100} width={100} /></div>
                <div>
                    <Link to="#">{art.name}</Link>
                    <div className='artDescription'>{art.description}</div>
                </div>
            </div>
            <div className='artMetaData float_clear'>            
                <div className='artLocation float_left'>
                {art.location_string}
                </div>
                <div className='artType float_right'>
                {art.category}
                </div>
            </div>
        </div>
    );
  }
}
