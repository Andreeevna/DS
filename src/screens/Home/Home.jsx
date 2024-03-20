import React from 'react'

import Collection from '../../components/collection/Collection'
import Info from '../../components/info/Info'

import Сommunication from '../../components/communication/Сommunication'
import ParallaxContainer from '../../components/parallax/ParallaxContainer'
import PromoSlider from '../../components/promoslider/PromoSlider'

const Home = () => {
	return (
		<>
			<PromoSlider />
			<Info />
			<Collection />
			<ParallaxContainer />
			<Сommunication />
		</>
	)
}

export default Home
