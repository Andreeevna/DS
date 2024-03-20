import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { useLocation } from 'react-router-dom'

import Preloader from '../../employees/components/Preloader'
import { getCollections } from '../../redux/collections/collectionsSlice'
import { productsFetch } from '../../redux/products/productsSlice'
import RouterApp from '../../routes/Router'
import Footer from '../footer/Footer'
import Header from '../header/Header'

import './../../assets/styles/index.css'

const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(productsFetch())
		dispatch(getCollections())
	}, [dispatch])

	const [loading, setLoading] = useState(true)
	const { pathname } = useLocation()

	useLayoutEffect(() => {
		setLoading(true)
		const timer = setTimeout(() => {
			setLoading(false)
		}, 1200)
		return () => clearTimeout(timer)
	}, [pathname])
	return loading ? (
		<>
			<Preloader />
			<div className='app'>
				<Header loading={loading} />
				<RouterApp />
				<Footer />
			</div>
		</>
	) : (
		<div className='app'>
			<Header />
			<RouterApp />
			<Footer />
		</div>
	)
}

export default App
