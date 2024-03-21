import {useState} from 'react';
import Header from './components/header';
import Card from './components/card';
import AboutMe from './components/aboutMe';
import './App.css';

function App() {
	const [darkMode, setDarkMode] = useState(localStorage.getItem('darkmode') === 'true' ?? false);
	const toggleDarkMode = event => {
		localStorage.setItem('darkmode', JSON.stringify(!darkMode));
		setDarkMode(!darkMode);
	};
  return (
    <div style={{backgroundColor: darkMode ? '#404040': '#E7E7E7', height: '100vh', width: '100vw', display:'flex-col',justifyContent: 'center', flexFlow: 'row', overflow: 'hidden', transition: 'all 0.3s ease-in 0s'}}>
		<Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
		<div style={{height: '95vh', width: '60vw', margin: 'auto', overflow: 'hidden'}} id="container">
			<AboutMe/>
		</div>
    </div>
  );
}

export default App;
