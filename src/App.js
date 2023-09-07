import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import UserList from './Components/Users/UserList';
import UserAdmin from './Components/Users/UserAdmin';
import CreateUser from './Components/Users/CreateUser';
import UpdateUser from './Components/Users/UpdateUser';
import { Provider } from 'react-redux';
import { store } from './Redux/store'
import UserListDetails from './Components/Users/UserListDetails';

let App = () => {
  return (

    <React.Fragment>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' Component={Home} />
            <Route exact path='/users/list' Component={UserList} />
            <Route exact path='/users/admin' Component={UserAdmin} />
            <Route exact path='/users/create' Component={CreateUser} />
            <Route exact path='/users/:id' Component={UpdateUser} />
            <Route exact path='/users/details/:id' Component={UserListDetails} />
          </Routes>
        </Router>
      </Provider>

    </React.Fragment>

  );
}
export default App;
