import './App.css'
import Home from './Home'
import Photosphere from './Photosphere'
import Map from './Map'
import Podcast from './Podcast'
import Interview from './Interview'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'

const App = () => {

  return (
    <Router>
      <Link className="logo" to="/">LOGO</Link>
      <Switch>
        <Route path='/photosphere' component={Photosphere} />
        <Route path='/map' component={Map} />
        <Route path='/podcast' component={Podcast} />
        <Route path='/interview' component={Interview} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  )
}

export default App