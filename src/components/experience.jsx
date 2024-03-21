import { useState } from 'react';
import React from 'react';

const Experience = ({ name, status, dates, description, style, children }) => {
    return (
		<div style={{marginTop: '8px'}}>
			<div style={{fontSize: '20px'}}>{name}</div>
			<div style={{fontSize: '16px', marginLeft: '10px'}}>{status}</div>
			<div style={{fontSize: '16px', marginLeft: '10px'}}>{dates}</div>
			<div style={{fontSize: '14px', marginLeft: '10px', fontStyle: 'italic'}}>{description}</div>
		</div>
    );
}

export default Experience;
