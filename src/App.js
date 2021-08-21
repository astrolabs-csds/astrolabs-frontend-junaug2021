import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainScreen from './MainScreen.js';
import RegistrationScreen from './RegistrationScreen.js';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={MainScreen} />
        <Route path="/register" exact={true} component={RegistrationScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;