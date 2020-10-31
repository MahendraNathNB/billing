import React from 'react'
import './App.css';
import Home from '../src/component/Home'
import Register from '../src/component/Register'
import Login from '../src/component/Login'
import {BrowserRouter,Link,Route,Switch,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {startLogoutUser} from '../src/action/userAction'

function App(props) {
  const handleLogout = () => {
    const confirm = window.confirm('are you sure you want to logout')
    if(confirm){
    props.dispatch(startLogoutUser())
    }
  }
  return (
    <div className="App">
    <BrowserRouter>
    <div>
          {
            Object.keys(props.user).length>0 ? (<div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light" >
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <a className="navbar-brand">Billing App</a>
              <ul className="navbar-nav">
              <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item active">
              <Link className="nav-link" onClick={handleLogout}>logout</Link>
              </li>
              </ul>
              </div>
              </nav>
            </div>) : (<div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light" >
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <a className="navbar-brand">Billing App</a>
              <ul className="navbar-nav">
              <li className="nav-item active">
              <Link className="nav-link" to="/users/register">register</Link>
              </li>
              <li className="nav-item active">
              <Link className="nav-link" to="/users/login">login</Link>
              </li>
              </ul>
              </div>
              </nav>
            </div>)
          }
        <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/users/register" component={Register} exact={true}/>
        <Route path="/users/login" component={Login} exact={true}/>
      
        </Switch>
    </div>
  </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user : state.users
  }
}


export default connect(mapStateToProps)(App)