import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import SignIn from './components/Auth/SignIn'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={SignIn} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
