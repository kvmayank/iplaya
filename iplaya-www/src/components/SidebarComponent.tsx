import * as React from 'react'
import { Link } from 'react-router-dom'
import '../css/Sidenav.css'

interface ISidebarProps {
  sidebarOpen: boolean,
  onSideBarToggle: () => void
}

export default class SidebarComponent extends React.Component<ISidebarProps, {}> {
  public render() {
    if (this.props.sidebarOpen) {
      return (
        <div className='sidenav'>
          <ul role="nav">
            <a className='closebtn' onClick={this.props.onSideBarToggle}>&times;</a>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/camps">Camps</Link></li>
            <li><Link to="/arts">Arts</Link></li>
          </ul>
        </div>
      );
    } else {
      return (
        <nav className='topnav'>
          <a href="#" onClick={this.props.onSideBarToggle}>
            <svg width="30" height="30" id="icoOpen">
                <path d="M0,5 30,5" stroke="#000" strokeWidth="5"/>
                <path d="M0,14 30,14" stroke="#000" strokeWidth="5"/>
                <path d="M0,23 30,23" stroke="#000" strokeWidth="5"/>
            </svg>
          </a>
        </nav>      );
    }
  }
}
