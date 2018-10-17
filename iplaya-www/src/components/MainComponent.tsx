import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import ArtsContainer from '../containers/artsContainer';
import CampsContainer from '../containers/campsContainer';
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
        <Route path='/camps' component={CampsContainer}/>
        <Route path='/arts' component={ArtsContainer}/>
      </Switch>
    )
  }
}
