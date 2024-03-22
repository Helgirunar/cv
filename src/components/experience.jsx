import React from 'react';

const Experience = ({ name, status, dates, description, style, children }) => {
    return (
		<div style={{marginTop: '8px'}}>
			<div className="text-lg">{name}</div>
			<div className="text-md" style={{marginLeft: '10px'}}>{status}</div>
			<div className="text-md" style={{marginLeft: '10px'}}>{dates}</div>
			<div className="text-sm" style={{marginLeft: '10px', fontStyle: 'italic'}}>{description}</div>
		</div>
    );
}

export default Experience;
