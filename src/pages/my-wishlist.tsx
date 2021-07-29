import axios from 'axios';
import React from 'react';
import ProductList from '../components/ProductsList';
import { useWishList } from '../hooks/wishlist';
import { IProduct } from '../types';

export default function MyWishList({ products }:  { products: IProduct[] }) {
    const { wishList } = useWishList();
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "35px" }}>
        {wishList?.length ? (
            <ProductList filter products={products} />
        ) : (
            <h1>Sua lista está vazia</h1>
        )}
        </div>
    )
}

export const getStaticProps = async () => {
  const response = await axios.get("https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e");
  return {
    props: {
      products: response.data.products,
    },
    revalidate: 60
  }
}