import React from 'react';
import Navbar from './Components/layout/Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './Components/layout/Homepage';
import CreateProject from './Components/projects/CreateProject'
import ProjectDetails from './Components/projects/ProjectDetails';
import SignIn from './Components/auth/SignIn';
import About from './Components/layout/About';
import Contact from './Components/layout/Contact';
import Icons from "./Components/helpers/icons"
import Feedback from './Components/Feedback/Feedback';
import RecievedFeedback from './Components/Feedback/RecievedFeedback'
import Hamburger from './Components/layout/Hamburger';

function App() {
  Icons()
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hamburger />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/create' component={CreateProject} />
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/auth' component={SignIn} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/feedback' component={Feedback} />
          <Route path='/recieved' component={RecievedFeedback} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
