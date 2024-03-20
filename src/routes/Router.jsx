import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Product from '../components/products/Product'
import Catalog from '../screens/Catalog/Catalog'
import Home from '../screens/Home/Home'
import LocationPage from '../screens/LocationPage/LocationPage'
import ProductPage from '../screens/ProductPage/ProductPage'
import StocksPage from '../screens/StocksPage/StocksPage'
import './../assets/styles/index.css'

const RouterApp = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='products/:name?' element={<ProductPage />} />
			<Route path='products/:name?/:id' element={<Product />} />
			<Route path='/catalog' element={<Catalog />} />
			<Route path='/stocks' element={<StocksPage />} />
			<Route path='/location' element={<LocationPage />} />
		</Routes>
	)
}

export default RouterApp
