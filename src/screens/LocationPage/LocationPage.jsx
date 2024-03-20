import {
	FullscreenControl,
	GeolocationControl,
	Map,
	Placemark,
	YMaps,
	ZoomControl,
} from '@pbe/react-yandex-maps'
import cn from 'classnames'
import React from 'react'

import Layout from '../../components/layout/Layout'
import './../../assets/styles/index.css'
import styles from './LocationPage.module.css'

const LocationPage = () => {
	return (
		<Layout>
			<div className={cn('bg_container', styles.location_container)}>
				<div className={styles.map_desc}>
					<h2 className={styles.map_desc__title}>
						Салоны Дверная История в Орле
					</h2>
					<span className={styles.map_desc__details}>
						Как приобрести продукцию Дверная История, если нет салона в городе?
					</span>
				</div>
				<div className={styles.map_container}>
					<YMaps query={{ apikey: 'faac5078-2247-4098-a32a-f7ad43757f69' }}>
						<div>
							<Map
								defaultState={{ center: [52.971587, 36.058194], zoom: 16 }}
								width={'60%'}
								height={'70vh'}
							>
								<GeolocationControl
									options={{ position: { top: 20, left: 20 } }}
								/>
								<ZoomControl
									options={{
										size: 'small',
										position: { bottom: 100, left: 20 },
									}}
								/>
								<Placemark
									geometry={[52.971871, 36.05613]}
									options={{
										preset: 'islands#blackDotIcon',
										iconSize: [10, 10],
									}}
								/>
								<FullscreenControl />
							</Map>
						</div>
					</YMaps>
				</div>
			</div>
		</Layout>
	)
}

export default LocationPage
