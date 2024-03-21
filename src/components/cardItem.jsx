import { useState } from 'react';
import React from 'react';

const CardSelector = ({ style, id, children }) => {
    return (
		<div id={{id}} style={{ ...style, border: '1px solid #ddd', borderRadius: '0px 0px 8px 8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: 'white' }}>
			{children}
		</div>
    );
}

export default CardSelector;
