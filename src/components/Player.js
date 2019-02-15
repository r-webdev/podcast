import React from 'react';

export default function Player(props) {
  return (
    <div key={props.key} className="player">
      <iframe title={props.title} src={props.url.replace('/webdev/', '/webdev/embed/')} height="102px" width="400px" frameborder="0" scrolling="no"></iframe>
    </div>
  )
}
