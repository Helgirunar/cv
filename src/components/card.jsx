import React from 'react';

const Card = ({ title, style, containerStyle, darkMode, children }) => {
  return (
    <div className={darkMode ? 'dms dmb' : 'lms lmb'} style={{ borderRadius: '8px', padding: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '100vw', ...style }}>
		<div className="text-xl" style={{ marginBottom: title ? '8px' : '0px'}}>{title}</div>
		<div style={{...containerStyle}}>
			{children}
		</div>
    </div>
  );
}

export default Card;