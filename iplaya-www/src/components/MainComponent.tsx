import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import EventsContainer from '../containers/eventsContainer';
import HomeComponent from './HomeComponent';

export default class MainComponent extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props)
  }

  public render() {
    return (
      <Switch>
        <Route exact={true} path='/' component={HomeComponent}/>
        <Route path='/events' component={EventsContainer}/>
      </Switch>
    )
  }
}
