import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import  EventDashboard from '../../features/event/EventDashboard/EventDashboard'


class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Ad-Vents</h1>
        <EventDashboard/>
      </div>
    );
  }
}

export default App;

