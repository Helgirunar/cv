import {useState} from 'react';
import { useMediaQuery } from 'react-responsive'
import './App.css';
import Header from './pages/header';
import AboutMe from './pages/aboutMe';
import './App.css';
import {Helmet} from 'react-helmet'

function App() {
	const [darkMode, setDarkMode] = useState(localStorage.getItem('darkmode') === 'true' ?? false);
	const toggleDarkMode = event => {
		localStorage.setItem('darkmode', JSON.stringify(!darkMode));
		setDarkMode(!darkMode);
	};
  return (
	<div>
		<Helmet>
			<title>Helgi Rúnar Jóhannesson</title>
			<meta name="description" content="Ferilskrá" />
			<meta name="image" content={process.env.PUBLIC_URL + '/images/faceImage.jpg'} />
		</Helmet>
		<div className={darkMode ? 'dmm' : 'lmm'} style={{ minHeight: '100vh', height: '100%', width: '100%', display:'flex-col',justifyContent: 'center', flexFlow: 'row'}}>
			<Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
			<div className="centerContainer" style={{margin: 'auto'}} id="container">
				<AboutMe darkMode={darkMode}/>
			</div>
		</div>
	</div>
  );
}

export default App;
