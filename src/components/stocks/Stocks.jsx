import cn from 'classnames'
import React from 'react'

import styles from './Stocks.module.css'

const Stocks = () => {
	const stocksData = [
		{
			image: '/images/stocks/Frame 16.png',
			title: 'Каждая 5 дверь в подарок',
			description: '1 ноября 2023',
		},
		{
			image: '/images/stocks/Frame 27.png',
			title: 'Рассрочка бзе процентов',
			description: '12 октября 2023',
		},
		{
			image: '/images/stocks/Frame 29.png',
			title: 'Каждая 3 дверь в подарок',
			description: '1 ноября 2023',
		},
	]
	return (
		<section className={styles.stocks}>
			<div className={cn('bg_container', styles.stocks_container)}>
				{stocksData.map((el, index) => (
					<div className={styles.stocks__item} key={el.title + index}>
						<div className={styles.stocks__img}>
							<img src={el.image} alt={'Акционное предложение'} />
						</div>
						<div className={styles.stocks__info}>
							<p className={styles.stocks__title}>{el.title}</p>
							<span className={styles.stocks__desc}>{el.description}</span>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Stocks
