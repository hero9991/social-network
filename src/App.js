import React from 'react';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News'
import { Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import MusicContainer from './components/Music/MusicContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


function App (props) {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <NavBar />
      <div className='content'>
        <Route path='/Dialogs' render={() => <DialogsContainer />} />
        <Route path='/Profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/News' render={() => <News />} />
        <Route path='/Settings' render={() => <Settings />} />
        <Route path='/Music' render={() => <MusicContainer />} />
        <Route path='/Users' render={() => <UsersContainer />} />
      </div>
    </div>
  );
}

export default App;
