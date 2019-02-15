import React, { Component } from 'react';
import './App.scss';

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
        this.setState({ 'episodes': data.items })
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <h1>r/webdev podcast</h1>
        {
          this.state.episodes.length > 0 ? 
          this.state.episodes.map(episode => (
            <blockquote key={episode.guid} class="embedly-card"><h4><a href={episode.url}>{episode.title}</a></h4><p>{episode.summary}</p></blockquote>
          ))
          : ''
        }
      </div>
    );
  }
}

export default App;
