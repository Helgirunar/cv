import React from 'react';

const Card = ({ title, style, children }) => {
  return (
    <div style={{...style, border: '1px solid #ddd', borderRadius: '8px', padding: '12px', margin: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 'backgroundColor':'white' }}>
		<div style={{fontSize: '20px', marginBottom: title ? '8px' : '0px'}}>{title}</div>
      {children}
    </div>
  );
}

export default Card;