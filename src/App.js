import React from 'react';
import Navbar from './Components/layout/Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './Components/layout/Homepage';
import CreateProject from './Components/projects/CreateProject'
import ProjectDetails from './Components/projects/ProjectDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/create' component={CreateProject} />
          <Route path='/project/:id' component={ProjectDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
