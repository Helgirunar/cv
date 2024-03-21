import { useState, useEffect } from 'react';
import Card from './card';
import CardSelector from './cardSelector';

const AboutMe = ({darkMode}) => {
	console.log(darkMode);
  return (
    <div style={{display: 'grid', gridTemplateColumns: '35% 65%'}}>
		<div>
			<Card style={{display: 'flex'}} darkMode={darkMode}>
				<img src={process.env.PUBLIC_URL + '/images/faceImage.jpg'} style={{border: '2px solid #2465B4', borderRadius: '20%', height: '120px', width: '120px', textAlign: 'center', marginRight: '10px'}} alt="Image"/>
				<div style={{padding: '6px'}}>
					<div style={{marginTop: '2px', fontSize: '24px'}}>Helgi Rúnar Jóhannesson</div>
					<div style={{marginTop: '1px', fontSize: '16px'}}>Helgirunarjohannesson@gmail.com</div>
					<div style={{marginTop: '2px', fontSize: '16px'}}>+354 690-3074</div>
				</div>
			</Card>
			{/* <Card darkMode={darkMode}></Card> */}
		</div>
		<div>
			<CardSelector darkMode={darkMode} items={['helgi','helgi2','helgi3','helgi4']}>
				<div id="helgi">Hello this is helgi</div>
				<div id="helgi2">Hello this is helgi2</div>
				<div id="helgi3">Hello this is helgi3</div>
				<div id="helgi4">Hello this is helgi4</div>
			</CardSelector>
		</div>
    </div>
  );
};
export default AboutMe;