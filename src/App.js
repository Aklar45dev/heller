import './App.css'
import Home from './Home'
import Photosphere from './Photosphere'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path='/photosphere' component={Photosphere} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  )
}

export default App