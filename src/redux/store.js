import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import collectionsSlice from './collections/collectionsSlice'
import productsSlice from './products/productsSlice'

export const store = configureStore({
	reducer: {
		collections: collectionsSlice,
		products: productsSlice,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},

	middleware: getMiddleware => getMiddleware().concat(apiSlice.middleware),
	devTools: true,
})
