import React, { useMemo } from 'react';
import { useWishList } from '../../hooks/wishlist';
import { IProduct } from '../../types';
import ProductCard from '../ProductCard';
import { Container } from './styles';

const ProductList = ({ products, filter }: { products: IProduct[], filter?: boolean }) => {
    const { wishList } = useWishList();
    const filteredWishList = useMemo(() => {
        const replace_list = products.filter((product) => {
            if (wishList.find((item) => item === product.id.toString())) {
                return product;
            }
        })

        return replace_list;
    }, [products, wishList]);

    return (
        <Container>
            {filter ? (
                filteredWishList.map((wish_product) => (
                    <ProductCard removeButton product={wish_product} key={wish_product.id} />
                ))
            ) : products.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </Container>
    );
}

export default ProductList;