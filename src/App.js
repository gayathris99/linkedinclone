import React, { useEffect } from 'react';
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Login from './Login';
import Widgets from './Widgets'
import {selectUser, logout, login} from './features/userSlice'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { firebaseAuth } from './firebase';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    firebaseAuth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.displayName
        }))
      }
      else {
        dispatch(logout())
      }
    })
  })
  const user = useSelector(selectUser)
  return (
    <div className="app">
      <Header />
      { !user ? ( <Login/>) : (
              <div className="app_body">
              <Sidebar/>
              <Feed />
              <Widgets/>
            </div>
      ) }
    </div>
  );
}

export default App;
