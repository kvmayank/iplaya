import * as React from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux';
import { toggleLayoutSidebar } from '../actions/layoutActions';
import '../css/App.css';
import { IApplicationState } from '../store/applicationState';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import SidebarComponent from './SidebarComponent';


interface IAppProps {
  sidebarOpen: boolean
}

interface IPropsFromDispatch {
  toggleLayoutSidebar: typeof toggleLayoutSidebar
}

class AppComponent extends React.Component<IAppProps & IPropsFromDispatch, {}> {
  public render() {
    return (
      <div className="App">
        <div className={this.props.sidebarOpen ? "AppOpenSidebar" : "AppClosedSidebar"}>
          <SidebarComponent sidebarOpen={this.props.sidebarOpen} onSideBarToggle={this.props.toggleLayoutSidebar} />
        </div>        
        <div className={this.props.sidebarOpen ? "AppBodyOpenSidebar" : "AppBodyClosedSidebar"}>
          <HeaderComponent />
          <div className="App-maincomponent">
            <MainComponent />
          </div>          
        </div>
        <div className="clear" />
      </div>
    );
  }
}

const mapStateToProps = ({ layout }: IApplicationState) => ({
  sidebarOpen: layout.sidebarOpen
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleLayoutSidebar: () => dispatch(toggleLayoutSidebar())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);
