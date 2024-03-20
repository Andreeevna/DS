import cn from 'classnames'
import React from 'react'

import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Preloader from '../../employees/components/Preloader'
import styles from './Products.module.css'

const Products = () => {
	const { filtered } = useSelector(state => state.products)

	const { name } = useParams()

	return (
		<section className={styles.products}>
			<div className={cn('bg_container', styles.products_container)}>
				{!filtered ? (
					<Preloader />
				) : (
					filtered.map(item => {
						return (
							<div className={styles.products_item} key={item.id}>
								<Link
									to={`/products/${name}/${item.id}`}
									className={styles.products_item__img}
								>
									<img src={item.images[0]} alt='Межкомнатная дверь' />
								</Link>
								<div className={styles.products_item__info}>
									<div className={styles.products_item__text}>
										<h2 className={styles.products_item__title}>{item.name}</h2>
										<p className={styles.products_item__subtitle}>
											{item.coverage}
										</p>
									</div>
								</div>
							</div>
						)
					})
				)}
			</div>
		</section>
	)
}

export default Products
