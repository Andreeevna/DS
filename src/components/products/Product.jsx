import React, { useEffect, useState } from 'react'

import styles from './Product.module.css'

import { useNavigate, useParams } from 'react-router-dom'

import Preloader from '../../employees/components/Preloader'
import { useGetProductQuery } from '../../redux/api/apiSlice'
import Layout from '../layout/Layout'

const Product = () => {
	const { id } = useParams()

	const navigate = useNavigate()
	const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({
		id,
	})
	const [currentImage, setCurrentImage] = useState()

	useEffect(() => {
		if (!isFetching && !isLoading && !isSuccess) {
			navigate('/')
		}
	}, [isLoading, isFetching, isSuccess])

	useEffect(() => {
		if (isSuccess) {
			setCurrentImage(data.images[0])
		}
	}, [isSuccess])

	return (
		<Layout>
			{isLoading || !data ? (
				<Preloader />
			) : (
				<section className={styles.product}>
					<div className='bg_container'>
						<div className={styles.product__card}>
							<div className={styles.images}>
								<div
									className={styles.current}
									style={{ backgroundImage: `url(${currentImage})` }}
								/>
								<div className={styles.images__list}>
									{data?.images?.map((image, i) => {
										return (
											<div
												key={i}
												className={styles.image}
												style={{ backgroundImage: `url(${image})` }}
												onClick={() => {
													setCurrentImage(image)
												}}
											/>
										)
									})}
								</div>
							</div>

							<div className={styles.info}>
								<h1 className={styles.title}>{data.name}</h1>
								<div className={styles.color}>
									<span>Цвет модели:</span> бежевый
								</div>

								<div className={styles.sizes}>
									<span>Размеры:</span>
									<div className={styles.list}>
										<div className={styles.size}>600 x 2000</div>
										<div className={styles.size}>700 x 2000</div>
										<div className={styles.size}>800 x 2000</div>
										<div className={styles.size}>900 x 2000</div>
									</div>
								</div>

								<div className={styles.description}>
									<div className={styles.description__title}>
										Описание товара:
									</div>
									<div className={styles.description__text}>{data.desc}</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			)}
		</Layout>
	)
}

export default Product
