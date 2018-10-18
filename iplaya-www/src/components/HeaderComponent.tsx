import * as React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../containers/searchContainer';
import '../css/Header.css';

export default class HeaderComponent extends React.Component<{}, {}> {
  public render() {
    return (
      <div className='topnav'>
        <Link className='active' to="/">Home</Link>
        <Link to="/">Contact</Link>
        <SearchContainer />
      </div>
    )
  }
}
