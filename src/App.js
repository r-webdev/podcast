import React, { Component } from 'react';
import Player from './components/Player';
import Titlebar from './components/Titlebar';
import Spinner from './components/Spinner';
import './Base.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      episodes: []
    }
  }
  componentDidMount = () => {
    const feed = 'https://cors.io/?https://feed2json.org/convert?url=https%3A%2F%2Fanchor.fm%2Fs%2F912ca60%2Fpodcast%2Frss';
    fetch(feed)
      .then(res => res.json())
      .then(data => {
          document.getElementById('Spinner').style.display = 'none';
          this.setState({ 'episodes': data.items })
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <Spinner />
        <Titlebar />
        <div id="Output">
        {
          this.state.episodes.length > 0 ? 
          this.state.episodes.map(episode => (
            <Player key={episode.guid} title={episode.title} url={episode.url}/>
          ))
          : ''
        }
        </div>
      </div>
    );
  }
}

export default App;

/*
<div key={episode.guid} className="episode">
  <iframe title={episode.title} src={episode.url.replace('/webdev/', '/webdev/embed/')} height="102px" width="400px" frameborder="0" scrolling="no"></iframe>
</div>
*/