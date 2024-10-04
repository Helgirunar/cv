import { useEffect, useState } from "react";
import Card from '../components/card';
import Skill from '../components/skill';
import Title from '../components/title';
import Experience from '../components/experience';
import data from '../data/aboutme.json';
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const AboutMe = ({darkMode}) => {
	const [hoveredLink, setHoveredLink] = useState(null);
	
	const setHover = index => {
		setHoveredLink(index);
	};

  return (
    <div className="responsiveColumns" style={{display: 'grid', marginTop: '20px', paddingBottom: '20px'}}>
		<div>
			<Card containerStyle={{display: 'flex', flexDirection: 'column', gap: '8px'}} darkMode={darkMode}>
				<div style={{width: '45%', marginLeft: 'auto', marginRight: 'auto' }}>
					<img src={process.env.PUBLIC_URL + '/images/faceImage.jpg'} style={{borderRadius: '50%', width: '100%', border: '3px solid #2465B4'}} alt="cover photo"/>
					<div style={{ display: 'flex', gap: '8px 0px', justifyContent: 'space-around', marginTop: '2px' }}>
						<a
							href="https://www.linkedin.com/in/helgi-runar/"
							target="_blank"
							rel="noreferrer"
							style={{ padding: '2px', color: hoveredLink === 1 ? '#2465B4' : darkMode ? 'white' : 'black', transition: 'ease-out 0.15s' }}
							onMouseEnter={() => setHover(1)}
							onMouseLeave={() => setHover(null)}
						>
							<CiLinkedin style={{ width: '30px', height: '30px' }} />
						</a>
						<a
							href="https://github.com/Helgirunar"
							target="_blank"
							rel="noreferrer"
							style={{ padding: '2px', color: hoveredLink === 2 ? '#2465B4' : darkMode ? 'white' : 'black', transition: 'ease-out 0.15s' }}
							onMouseEnter={() => setHover(2)}
							onMouseLeave={() => setHover(null)}
						>
							<FaGithub style={{ width: '30px', height: '30px' }} />
						</a>
					</div>
				</div>
				<div>
					<div className="text-lg" style={{marginTop: '2px'}}>Helgi Rúnar Jóhannesson</div>
					<div className="text-md"  style={{marginTop: '1px'}}>Helgirunarjohannesson@gmail.com</div>
					<div className="text-md"  style={{marginTop: '2px'}}>+354 690-3074</div>
				</div>
			</Card>
			<Card darkMode={darkMode} title="Hæfni" style={{marginTop: '10px'}} containerStyle={{display: 'grid', gridTemplateColumns: '50% 50%'}}>
				<div style={{gridColumn: 'span 2', fontSize: '20px', marginTop: '2px'}}>Tæknilegar</div>
				{data.talents.skills.map((skill) => {
					return (<Skill key={skill.name} name={skill.name} level={skill.level}/>);
				})}
				<div style={{gridColumn: 'span 2', fontSize: '20px', marginTop: '10px'}}>Tungumál</div>
				{data.talents.languages.map((skill) => {
					return (<Skill key={skill.name} name={skill.name} level={skill.level}/>);
				})}
				<div style={{gridColumn: 'span 2', fontSize: '20px', marginTop: '10px'}}>Fleira</div>
				{data.talents.more.map((skill) => {
					return (<Skill key={skill.name} name={skill.name} level={skill.level}/>);
				})}
			</Card>
		</div>
		<div>
			<Card darkMode={darkMode} style={{fontSize: '18px'}}>
				<Title text="Um mig" darkMode={darkMode}/>
				<div className="text-md" style={{padding: '4px', marginTop: '8px', marginBottom: '8px'}}>
					{data.aboutme}
				</div>
				<Title text="Starfsreynsla" darkMode={darkMode} />
				<div style={{padding: '4px', marginBottom: '8px'}}>
					{data.jobs.map((skill) => {
						return (<Experience key={skill.name} name={skill.name} status={skill.status} dates={skill.dates} description={skill.description}/>);
					})}
				</div>
				<Title text="Menntun" darkMode={darkMode}/>
				<div style={{padding: '4px', marginBottom: '8px'}}>
					{data.schools.map((skill) => {
						return (<Experience key={skill.name} name={skill.name} status={skill.status} dates={skill.dates} description={skill.description}/>);
					})}
				</div>
				<Title text="Áhugamál" darkMode={darkMode}/>
				<div className="text-md" style={{padding: '4px', marginTop: '8px', marginBottom: '8px'}}>
					{data.interests}
				</div>
			</Card>
		</div>
    </div>
  );
};
export default AboutMe;