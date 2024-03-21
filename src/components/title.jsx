import React from 'react';

const Title = ({ text, style, darkMode }) => {
  return (
    <div style={{...style, position: 'relative', display: 'flex' }}>
		<div style={{backgroundColor: '#2465B4', height:'5px', width:'10%', flexGrow: '2', marginTop: 'auto', marginBottom: 'auto', borderRadius: '25px'}}></div>
		<div style={{ fontSize: '24px', marginLeft: '4px', marginRight: '4px', height:'100%', flexGrow: '1', width: 'auto', textAlign: 'center'}}>{text}</div>
		<div style={{backgroundColor: '#2465B4', marginLeft: '2px', height:'5px', width: '80%', marginTop: 'auto', marginBottom: 'auto', flexGrow: '2', borderRadius: '25px'}}></div>
    </div>
  );
};

export default Title;
