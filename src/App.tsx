import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './assets/styles/App.scss';
import Home from './pages/Home';
import Plan from './pages/Plan';
import Thanks from './pages/Thanks';
import { UserProvider } from './context'

function App() {
  return (
      <Router>
     <Switch>  
     <Route path='/' component={Home} exact/>
     <Route path='/plan' component={Plan}/>
     <Route path='/thanks' component={Thanks}/>
     </Switch>
   </Router>

   
  );
}

export default App;
