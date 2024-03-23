import React from 'react';

const Skill = ({ name, level, style, darkMode }) => {
  // Array to hold the levels
  const levels = [1, 2, 3, 4, 5];

  return (
    <div style={{...style}}>
      <div className="text-md" style={{ marginLeft: '2px' }}>{name}</div>
      <div style={{ display: 'flex' }}>
        {levels.map((lvl, index) => (
          <React.Fragment key={index}>
            <div
              style={{
                width: '18%',
                height: '1vh',
                backgroundColor: lvl <= level ? '#2465B4' : '#cccbcb', // Highlight up to the provided level
                borderTopLeftRadius: index === 0 ? '25px' : '0', // Border radius for first level
                borderBottomLeftRadius: index === 0 ? '25px' : '0', // Border radius for first level
                borderTopRightRadius: index === levels.length - 1 ? '25px' : '0', // Border radius for last level
                borderBottomRightRadius: index === levels.length - 1 ? '25px' : '0', // Border radius for last level
              }}
            />
            {index < levels.length - 1 && ( // Add divider between levels, except for the last one
              <div
                style={{
                  width: '1px',
                  height: '20px',
                  backgroundColor: 'transparent', // Change the color of the divider as needed
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Skill;
