import React from 'react'

const Header = ({darkMode, toggleDarkMode}) => {
  return (
		<div id="header" style={{backgroundColor: '#2465B4', height: '5vh', width: '100vw', padding: '5px 10px'}}>
			<div style={{width: '60vw', height: '5vh', margin: 'auto', display: 'flex', position: 'relative'}}>
				<div style={{color:'white', fontSize: '38px'}}>Helgi Rúnar Jóhannesson</div>
				<div onClick={toggleDarkMode} style={{position: 'absolute', right: '25px', display: 'flex', flexFlow: 'column', height:'5vh', gap: '9px', cursor: 'pointer'}}>
					<div style={{color: darkMode ? 'white' : 'white'}}>DarkMode</div>
					<div style={{height: '17.5px', width: '35px', borderRadius: '25px', display: 'flex', alignContent: 'center', position: 'relative', margin: 'auto', backgroundColor: '#E7E7E7'}}>
						<div style={{ position:'absolute', height: '16.5px', width: '16.5px', borderRadius:'25px', backgroundColor: darkMode ? '#404040' : 'gray', marginTop: '0.5px', marginLeft: '1.25px', left: darkMode ? '0px' : "14.5px", transition: 'all 0.3s ease-in 0s'}}>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default Header;