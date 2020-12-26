import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/home'
import Users from './components/users'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/users' exact component={Users}/>
        <Route path='/' render={()=><div>Not Found!!!</div>} />
     </Switch>
    </BrowserRouter>
  );
}

export default App;
