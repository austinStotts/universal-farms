import React from 'react';

const Stats = ({ dollars, fruit, seeds, acres }) => {
  return (
    <div className="stats-wrapper">
      <p className="stat-label">Dollars: $<span className="stat-item">{dollars}</span></p>
      <p className="stat-label">Fruit: <span className="stat-item">{fruit}</span></p>
      <p className="stat-label">Seeds: <span className="stat-item">{seeds}</span></p>
      <p className="stat-label">Acres: <span className="stat-item">{acres}</span></p>
    </div>
  )
}

export default Stats;