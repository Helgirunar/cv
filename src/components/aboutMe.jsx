import { useState, useEffect } from 'react';
import Card from './card';
import CardSelector from './cardSelector';

const Fetch = () => {
  return (
    <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto'}}>
		<div style={{}}>
			<Card>
				<img src={process.env.PUBLIC_URL + '/images/faceImage.jpg'} style={{margin: 'auto', border: '2px solid #2465B4', borderRadius: '20%', height: '120px', width: '120px', textAlign: 'center'}} alt="Image"/>
			</Card>
			<Card></Card>
		</div>
		<div style={{gridColumn:'span 2'}}>
			<CardSelector items={['helgi','helgi2']}>

			</CardSelector>
		</div>
    </div>
  );
};
export default Fetch;