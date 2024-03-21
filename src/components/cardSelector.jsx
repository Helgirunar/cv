import { useState } from 'react';
import React from 'react';

const CardSelector = ({ style, items, children }) => {
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
                        style={{
                            ...itemStyle,
                            backgroundColor: item === selected ? '#2465B4' : 'white',
                            color: item === selected ? 'white' : 'black',
                            cursor: 'pointer',
                            padding: '6px',
                            borderRadius: item === selected ? '8px 8px 0px 0px' : '8px 8px 0px 0px',
                        }}
                        onMouseEnter={(e) => { e.target.style.backgroundColor = '#2465B4'; e.target.style.color = 'white' }}
                        onMouseDown={(e) => setSelected(item)}
                        onMouseLeave={(e) => { 
                            if (item !== selected) {
                                e.target.style.backgroundColor = 'white';
								e.target.style.color = 'black';
                            }
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <div style={{ ...style, border: '1px solid #ddd', borderRadius: '0px 0px 8px 8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: 'white' }}>
                <div style={{ fontSize: '20px', marginBottom: selected ? '8px' : '0px' }}>{selected}</div>
                {children}
            </div>
        </div>
    );
}

export default CardSelector;
