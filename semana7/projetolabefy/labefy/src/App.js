import React from 'react';
import './App.css';
import CreatePlaylist from './components/CreatPlaylist';
import { Playlist } from './components/Playlist';

class App extends React.Component {

  state = {
    currentPage: true,
  }

  render () {

    return (
      <div className="App">
        {
        this.state.currentPage ? 
        <CreatePlaylist /> :
        <Playlist />
        }
        <img className="astroDJ" src={'https://i.pinimg.com/564x/0d/74/b8/0d74b8d6ec93798be314650f516548ec.jpg'}/>
      </div>
    );
  }
}

export default App;
