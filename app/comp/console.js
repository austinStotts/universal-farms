import React from 'react';

const Console = ({ messages }) => {
  return (
    <div className="console-wrapper">
      {messages.map(message => {
        return (<p className="console-message">{message}</p>)
      })}
    </div>
  )
}

export default Console;