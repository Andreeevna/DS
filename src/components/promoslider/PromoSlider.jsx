import React from 'react'
import { Link } from 'react-router-dom'

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

import './../../assets/styles/index.css'
import styles from './PromoSlider.module.css'
import { dataSlider } from './dataSlider'

const PromoSlider = () => {
	const [slidePerView, setSlidePerView] = React.useState(1)

	return (
		<>
			<Swiper
				navigation={{ nextEl: '.next_slide', prevEl: '.prev_slide' }}
				loop={true}
				modules={[Autoplay, Pagination, Navigation, EffectFade]}
				spaceBetween={1}
				effect={'fade'}
				slidesPerView={slidePerView}
				autoplay={{
					delay: 2500,
					pauseOnMouseEnter: true,
					disableOnInteraction: false,
				}}
				// onSlideChange={() => console.log('slide change1')}
				// onSwiper={swiper => console.log(swiper)}
			>
				{dataSlider.map(item => (
					<SwiperSlide key={item.id}>
						<div className={styles.promo_container}>
							<img src={item.imageUrl} alt={item.alt} />
							<div className={styles.promo}>
								<h4 className={styles.promo__item_title}>{item.title}</h4>
								<Link className={styles.promo__item_link} to={item.linkTo}>
									подробнее...
								</Link>
							</div>
						</div>
					</SwiperSlide>
				))}

				<div className='next_slide'>
					<SlArrowRight />
				</div>
				<div className='prev_slide'>
					{' '}
					<SlArrowLeft />
				</div>
			</Swiper>
		</>
	)
}

export default PromoSlider
