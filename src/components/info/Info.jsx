import React from 'react'

import './../../assets/styles/index.css'
import styles from './Info.module.css'

const Info = () => {
	return (
		<section className={styles.info}>
			<div className='bg_container'>
				<div className={styles.info__text_block}>
					<p className={styles.info__text}>
						Создайте индеальный интерьер вместе с{' '}
						<span> "Дверной Историей".</span>
					</p>
					<p className={styles.info__text}>
						Здесь вы узнаете подробнее о нашем бренде и познакомитесь с
						продукцией.
					</p>
				</div>
			</div>
		</section>
	)
}

export default Info
