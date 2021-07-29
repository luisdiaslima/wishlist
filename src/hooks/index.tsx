import React from 'react'

import { WishListProvider } from './wishlist'

const AppProvider: React.FC = ({ children }) => <WishListProvider>{children}</WishListProvider>

export default AppProvider
