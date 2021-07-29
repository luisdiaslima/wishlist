import React from 'react';
import Image from 'next/image';
import {  ProductContainer, WishThis, ProductInfo, ProductTitle, ProductPrice, RemoveThis } from './styles';

import { AiFillHeart } from 'react-icons/ai';
import { RiCloseCircleLine } from 'react-icons/ri';
import { IProduct } from '../../types';
import { useWishList } from '../../hooks/wishlist';


const ProductCard= ({ product, removeButton }: { product: IProduct, removeButton?: boolean }) => {
    const { addToWishList, wishList } = useWishList();
    return (
        <ProductContainer>
            {removeButton ? (
                <RemoveThis>
                    <RiCloseCircleLine onClick={() => addToWishList(product.id.toString())} />
                </RemoveThis>
            ) : (
                <WishThis isSelected={!!wishList.find((item) => item === product.id.toString())} onClick={() => addToWishList(product.id.toString())}>
                    <AiFillHeart />
                </WishThis>
            )}
            <ProductInfo>
                <Image src="https://via.placeholder.com/300x300" alt="product" width={200} height={178}></Image>
                <ProductTitle>{product.title}</ProductTitle>
            </ProductInfo>
            <ProductPrice>
                    {product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </ProductPrice>
        </ProductContainer>
    );
}

export default ProductCard;