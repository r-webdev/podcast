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
            <iframe src={episode.url.replace('/webdev/', '/webdev/embed/')} height="102px" width="400px" frameborder="0" scrolling="no"></iframe>
          ))
          : ''
        }
      </div>
    );
  }
}

export default App;
