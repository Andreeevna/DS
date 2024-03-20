import React from 'react'
import { Parallax } from 'react-parallax'

import PanelPng from '../../assets/images/parallax/panel1.jpg'

import Button from '../ui/button/Button'
import './../../assets/styles/index.css'
import styles from './ParallaxContainer.module.css'

const ParallaxContainer = () => {
	return (
		<Parallax
			speed={-10}
			bgImage={PanelPng}
			bgImageAlt='Wall panel'
			strength={600}
		>
			<div className='bg_container'>
				<div className={styles.parallax_inner}>
					<h2 className={styles.title}>БЕЗГРАНИЧНЫЙ ВЫБОР</h2>
					<p className={styles.text}>
						Классика или минимализм, массив или современные отделки, подберите
						свою идеальную дверь.
					</p>
					<Button btnColor={'btn_light'} affiliation={'btn_parallax'} />
				</div>
			</div>
		</Parallax>
	)
}

export default ParallaxContainer
