import { useState } from "react";
import Card from '../components/card';
import Skill from '../components/skill';
import Title from '../components/title';
import Experience from '../components/experience';
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
					<img src={process.env.PUBLIC_URL + '/images/faceImage.jpg'} style={{borderRadius: '50%', width: '100%',}} alt="Image"/>
					<div style={{ display: 'flex', gap: '8px 0px', justifyContent: 'space-around', marginTop: '2px' }}>
						<a
							href="https://www.linkedin.com/in/helgi-runar/"
							target="_blank"
							style={{ padding: '2px', color: hoveredLink === 1 ? '#2465B4' : darkMode ? 'white' : 'black', transition: 'ease-out 0.15s' }}
							onMouseEnter={() => setHover(1)}
							onMouseLeave={() => setHover(null)}
						>
							<CiLinkedin style={{ width: '30px', height: '30px' }} />
						</a>
						<a
							href="https://github.com/Helgirunar"
							target="_blank"
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
				<Skill name="Laravel" level={5}/>
				<Skill name="PHP" level={5}/>
				<Skill name="Javacsript" level={5}/>
				<Skill name="Typescript" level={5}/>
				<Skill name="React" level={3}/>
				<Skill name="React Native" level={2}/>
				<Skill name="TailwindCSS" level={5}/>
				<Skill name="SQL" level={4}/>
				<Skill name="CSS" level={4}/>
				<Skill name="Python" level={3}/>
				<Skill name="C++" level={3}/>
				<Skill name="C#" level={3}/>
				<div style={{gridColumn: 'span 2', fontSize: '20px', marginTop: '10px'}}>Tungumál</div>
				<Skill name="Íslenska" level={5}/>
				<Skill name="Enska" level={5}/>
				<Skill name="Spænska" level={1}/>
				<div style={{gridColumn: 'span 2', fontSize: '20px', marginTop: '10px'}}>Fleira</div>
				<Skill name="Mannlegt samskipti" level={5}/>
				<Skill name="Teymisvinna" level={4}/>
				<Skill name="Frumkvæði" level={5}/>
			</Card>
		</div>
		<div>
			<Card darkMode={darkMode} style={{fontSize: '18px'}}>
				<Title text="Um mig" darkMode={darkMode}/>
				<div className="text-md" style={{padding: '4px', marginTop: '8px', marginBottom: '8px'}}>
					Ég er tölvunafræðingur með mikinn áhuga á forritun og hugbúnaðarþróun, hef lært tölvunarfræði í um það bil 8 ára þar sem ég hóf nám í tölvunafræði með viðbættum stúdent í Fjölbrautarskóla Suðurnesja
					og fór svo í framhaldsnám í Tölvunafræði í Haskólanum í Reykjavík. Ég hef unnið sem Fullstack developer í 2 ár hjá fyrirtæki sem heitir Northbound, þar tók ég þátt í að þróa og viðhalda vefsíðum og kerfum þeirra
					undir stjórn Forstjóra og Tæknistjóra.
				</div>
				<Title text="Starfsreynsla" darkMode={darkMode} />
				<div style={{padding: '4px', marginBottom: '8px'}}>
					<Experience
						name="Northbound" 
						status="Fullstack Developer" 
						dates="Mars 2022 - Desember 2023" 
						description="Vann að ýmsum verkefnum fyrir Gleely.com og Northbound.is, bæði á bakenda og framenda. Þar að meðal útlit á framenda, bakenda og api tengingar við chatGPT, LuluPrint, GoogleAds, GoogleMaps." 
						/>
					<Experience 
						name="Menntamálastofnun" 
						status="Starfsnemi í vefþjónustu" 
						dates="Júní 2021 - September 2021" 
						description="Tók þátt í forritun af Adalnamskra.is og lagfæringum á vefleikjum." 
						/>
					<Experience 
						name="Mennta- og menningarmálaráðuneytið" 
						status="Starfsnemi í tækniteymi" 
						dates="Maí 2020 - Águst 2020" 
						description="Var partur af teymi sem fékk það verkefni að færa listamannalaun á rafrænt form. Fyrir það voru öll gögn geymd skriflega. Aukalega vann ég í nokkur smá verkefnum fyrir önnur teymi." 
						/>
					<Experience 
						name="Etix Group Iceland (Borealis Data Center)" 
						status="Tæknimaður" 
						dates="September 2018 - September 2019" 
						description="Vann við að setja upp Bitcoin vélar, bæði í Gagnaveri þeirra á Suðurnesjum og Blönduósi og var svo einn af tveimur sem sá um vélar í gagnaveri á Suðurnesi." 
						/>
				</div>
				<Title text="Menntun" darkMode={darkMode}/>
				<div style={{padding: '4px', marginBottom: '8px'}}>
					<Experience 
						name="Háskólinn í Reykjavík" 
						status="BSc í tölvunarfræði" 
						dates="Jan 2017 - Des 2021" 
						description="Lokaverkefnið vann hópurinn minn í samstarfi við AdvaniaDC eða AtNorth í dag. Þar gerðum við hash rate monitor, og notuðum React, nodejs, css, html og fleira til að forrita það." 
						/>
					<Experience 
						name="Fjölbrautarskóli Suðurnesja" 
						status="Tölvunarfræði með stúdentsprófi." 
						dates="2012 - 2016" 
						description="" 
						/>
				</div>
				<Title text="Áhugamál" darkMode={darkMode}/>
				<div className="text-md" style={{padding: '4px', marginTop: '8px', marginBottom: '8px'}}>Frá ungum aldri hef ég haft gaman af tölvuleikjum og tæknitengdum hlutum. 
					Eftir að ég lærði tölvrunafræði í Fjölbrautarskóla Suðurnesja fékk ég einnig mikinn áhuga á forritun. 
					Ég hef líka áhuga á borðspilum og nýlega hef ég haft áhuga á Frisbee golf og að snjóbretta.
				</div>
				<Title text="Meðmæli" darkMode={darkMode}/>
				<div style={{padding: '4px', marginBottom: '8px'}}>
					<Experience
						name="Ívar Rafn Þórarinsson" 
						status="Forstjóri Northbound" 
						dates="+354 866 8031" 
						description="" 
						/>
					<Experience
						name="Arnar Stefánsson" 
						status="Tæknistjóri Northbound" 
						dates="+354 848 8777" 
						description="" 
						/>
				</div>
			</Card>
		</div>
    </div>
  );
};
export default AboutMe;