import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp  } from "react-icons/io5";

const Header = ({darkMode, toggleDarkMode}) => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 720)
	const [navBar, setNavBar] = useState(false);

	const handleResize = () => {
		if (window.innerWidth < 720) {
			setIsMobile(true)
		} else {
			setIsMobile(false)
		}
	}
	function NavBarIcon({isToggled}) {
		if(isToggled) {
			return <FaBars />;
		}
		return <IoCloseSharp  />;
	}
	const toggleNavBar = event => {
		localStorage.setItem('navBar', JSON.stringify(!navBar));
		setNavBar(!navBar);
	};
		// create an event listener
	useEffect(() => {
		window.addEventListener("resize", handleResize)
	})

  return (
		<div id="header" className="headerHeight" style={{backgroundColor: '#2465B4', width: '100%', height: '7vh', zIndex: -1}}>
			<div className="centerContainer headerHeight" style={{margin: 'auto', display: 'flex', position: 'relative', zIndex: 9, backgroundColor: '#2465B4'}}>
				<div className="text-2xl" style={{color:'white', marginTop: 'auto', marginBottom: 'auto', marginLeft: '1vw', userSelect: 'none'}}>Helgi Rúnar Jóhannesson</div>
					{/* <div style={{color:'white', transition: 'ease-out 0.15s', marginLeft: 'auto', marginRight: '80px', marginTop: 'auto', marginBottom: 'auto',}}>
						<Link to="/" style={{color: "white", textDecoration: "none", marginRight: '10px'}}>Um mig</Link>
						<Link to="/projects" style={{color: "white", textDecoration: "none"}}>Verkefni</Link>
					</div> */}
				<div style={{display: isMobile ? 'none' : 'block'}}>
					<div style={{position: 'absolute', right: '5px', display: 'flex', flexFlow: 'column', height:'100%'}}>
						<div onClick={toggleDarkMode} style={{height: '20px', width: '40px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', margin: 'auto', backgroundColor: darkMode ? '#2c3e50' : '#ecf0f1', cursor: 'pointer', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)'}}>
							<div style={{position: 'absolute', height: '17.5px', width: '17.5px', borderRadius: '50%', backgroundColor: darkMode ? '#f1c40f' : '#303030', top: '1.1px', left: darkMode ? '2.5px' : '21.5px', transition: 'all 0.3s ease-in'}}>
							</div>
						</div>
					</div>
				</div>
				<div style={{display: isMobile ? 'block' : 'none'}}>
					<div onClick={toggleNavBar} style={{position: 'absolute', right: '5px', display: 'flex', flexFlow: 'column', height:'100%'}}>
						<div style={{color:'white', height: '20px', width: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', margin: 'auto', cursor: 'pointer'}}>
							<NavBarIcon isToggled={!navBar}/>
						</div>
					</div>
				</div>
			</div>
			<div style={{backgroundColor: '#2461B4', position: 'absolute', width: '100vw', 'height':'20vh', marginTop: navBar ? '0vh' : '-27vh', transition: 'ease-out 0.30s', borderTop: "3px solid #2465B4", zIndex: 8}}>
				<div style={{margin: '2vw', display: "flex"}}>
					<div style={{color:'white', transition: 'ease-out 0.15s', marginLeft: 'auto', marginRight: 'auto', display: "flex", flexDirection:"column"}}>
						<Link to="/" style={{color: "white", textDecoration: "none"}}>Um mig</Link>
						<Link to="/projects" style={{color: "white", textDecoration: "none"}}>Verkefni</Link>
					</div>
					<div style={{position: 'absolute', right: '5px', bottom: '5px', display: 'flex', flexFlow: 'column'}}>
						<div onClick={toggleDarkMode} style={{height: '20px', width: '40px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', margin: 'auto', backgroundColor: darkMode ? '#2c3e50' : '#ecf0f1', cursor: 'pointer', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)'}}>
							<div style={{position: 'absolute', height: '17.5px', width: '17.5px', borderRadius: '50%', backgroundColor: darkMode ? '#f1c40f' : '#303030', top: '1.1px', left: darkMode ? '2.5px' : '21.5px', transition: 'all 0.3s ease-in'}}>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default Header;