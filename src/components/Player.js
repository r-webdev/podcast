import React from 'react';

export default function Player(props) {
  return (
    <div className="player">
      <iframe title={props.title} src={props.url.replace('/webdev/', '/webdev/embed/')} height="102px" width="400px" frameBorder="0" scrolling="no"></iframe>
    </div>
  )
}
