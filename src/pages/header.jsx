import React from 'react'

const Header = ({darkMode, toggleDarkMode}) => {
  return (
		<div id="header" className="headerHeight" style={{backgroundColor: '#2465B4', width: '100%'}}>
			<div className="centerContainer headerHeight" style={{margin: 'auto', display: 'flex', position: 'relative'}}>
				<div className="text-2xl" style={{color:'white', marginTop: 'auto', marginBottom: 'auto', marginLeft: '1vw', userSelect: 'none'}}>Helgi Rúnar Jóhannesson</div>
				<div style={{position: 'absolute', right: '5px', display: 'flex', flexFlow: 'column', height:'100%'}}>
					{/* <div style={{color: darkMode ? 'white' : 'white'}}>DarkMode</div> */}
					<div onClick={toggleDarkMode} style={{height: '20px', width: '40px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', margin: 'auto', backgroundColor: darkMode ? '#2c3e50' : '#ecf0f1', cursor: 'pointer', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)'}}>
						<div style={{position: 'absolute', height: '17.5px', width: '17.5px', borderRadius: '50%', backgroundColor: darkMode ? '#f1c40f' : '#303030', top: '1.1px', left: darkMode ? '2.5px' : '21.5px', transition: 'all 0.3s ease-in'}}>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default Header;