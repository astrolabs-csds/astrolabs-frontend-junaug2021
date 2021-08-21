import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainScreen from './MainScreen';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={MainScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;