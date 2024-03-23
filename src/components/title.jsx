import React from 'react';

const Title = ({ text, style, darkMode }) => {
  return (
    <div style={{...style, position: 'relative', display: 'flex' }}>
		<div style={{backgroundColor: '#2465B4', height:'5px', width:'10%', flexGrow: '2', marginTop: 'auto', marginBottom: 'auto', marginRight: '4px', borderRadius: '25px'}}></div>
		<div className="text-lg" style={{ paddingLeft: '4px', paddingRight: '4px', height:'100%', flexGrow: '1', width: 'auto', textAlign: 'center', whiteSpace: 'nowrap'}}>{text}</div>
		<div style={{backgroundColor: '#2465B4', marginLeft: '2px', height:'5px', width: '75%', marginTop: 'auto', marginBottom: 'auto', flexGrow: '2', marginLeft: '4px', borderRadius: '25px'}}></div>
    </div>
  );
};

export default Title;
