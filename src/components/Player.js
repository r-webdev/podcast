import React from 'react';

export default function Player(props) {
  return (
    <div className="player">
    <h2>{props.title}</h2>
    <audio controls>
      <source src={props.url.replace('https://anchor.fm/s/912ca60/podcast/play/2341076/', '')} type="audio/mpeg" />
    </audio>
    </div>
  )
}
