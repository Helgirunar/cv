import {useState} from 'react';
import './App.css';
import Header from './pages/header';
import AboutMe from './pages/aboutMe';
import './App.css';

function App() {
	const [darkMode, setDarkMode] = useState(localStorage.getItem('darkmode') === 'true' ?? false);
	const toggleDarkMode = event => {
		localStorage.setItem('darkmode', JSON.stringify(!darkMode));
		setDarkMode(!darkMode);
	};
  return (
    <div className={darkMode ? 'dmm' : 'lmm'} style={{ height: '100%', width: '100%', display:'flex-col',justifyContent: 'center', flexFlow: 'row'}}>
		<Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
		<div style={{width: '60vw', margin: 'auto'}} id="container">
			<AboutMe darkMode={darkMode}/>
		</div>
    </div>
  );
}

export default App;
