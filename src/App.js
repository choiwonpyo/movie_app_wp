import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import About from './routes/About'
import Home from './routes/Home'
import Navigation from './components/Navigation'
import MovieDetail from './components/MovieDetail'

import './App.css'


class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div className='root__container'>
          <div className="root__nav">
            <Navigation></Navigation>
          </div>
          <div className="root__page">
            <Route path='/' exact={true} component={Home} />
            <Route path='/about' component={About} />
            <Route path='/movies/:id' component={MovieDetail}/>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App;