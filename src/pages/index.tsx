import axios from 'axios';
import React from 'react';
import { Breadcrumb, MainContainer, Title } from '../../styles/globalStyled';
import ProductList from '../components/ProductsList';
import { IProduct } from '../types';

export default function Home({ products }:  { products: IProduct[] }) {
  return (
    <MainContainer>
        <Breadcrumb>Home</Breadcrumb>
        <ProductList products={products} />
    </MainContainer>
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