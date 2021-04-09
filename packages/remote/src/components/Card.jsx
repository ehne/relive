import React from 'react';

const Card = ({ title, callbackFn }) => {
  const isEnabled = true;

  return (
    <div className="card">
      <div className="animName">{title}</div>
      <button className={`action ${isEnabled ? '-enabled' : '-disabled'}`} onClick={callbackFn} type="button">Play</button>
    </div>
  );
};

export default Card;
