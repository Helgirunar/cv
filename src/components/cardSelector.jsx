import { useState } from 'react';
import React from 'react';

const CardSelector = ({ style, items, darkMode, children }) => {
    const [selected, setSelected] = useState(items[0]);
    const itemStyle = {
        flexGrow: 1,
        padding: 0,
        transition: 'background-color 0.3s ease-in-out', // Transition effect for smooth color change
    };
    return (
        <div style={{ padding: '12px', margin: '12px' }}>
            <div style={{ display: 'flex', alignContent: 'space-between', width: '100%', borderRadius: '8px 8px 0px 0px' }}>
                {items.map((item, index) => (
                    <div
                        key={index}
						className={darkMode ? 'dms' : 'lms'}
                        style={{
                            ...itemStyle,
                            backgroundColor: item === selected ? darkMode ? '#303030' : '#cccbcb' : darkMode ? '#404040' : '#E7E7E7',
                            color: darkMode ? 'white' : 'black',
                            cursor: 'pointer',
                            padding: '6px',
                            borderRadius: item === selected ? '8px 8px 0px 0px' : '8px 8px 0px 0px',
                        }}
                        onMouseEnter={(e) => { e.target.style.backgroundColor = darkMode ? '#303030' : '#cccbcb'; }}
                        onMouseDown={(e) => setSelected(item)}
                        onMouseLeave={(e) => { 
                            if (item !== selected) {
                                e.target.style.backgroundColor = darkMode ? '#404040' : '#E7E7E7';
                            }
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <div className={darkMode ? 'dms dmb' : 'lms lmb'} style={{ ...style, borderRadius: '0px 0px 8px 8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '4px' }}>
                <div style={{ fontSize: '20px', marginBottom: selected ? '8px' : '0px' }}>{selected}</div>
                {children}
            </div>
        </div>
    );
}

export default CardSelector;
