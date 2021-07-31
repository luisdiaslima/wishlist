import React, { useMemo } from 'react';
import { useWishList } from '../../hooks/wishlist';
import { IProduct } from '../../types';
import ProductCard from '../ProductCard';
import { Container } from './styles';

const ProductList = ({ products = [], filter }: { products: IProduct[], filter?: boolean }) => {
    const { wishList = [] } = useWishList();
    const filteredWishList = useMemo(() => {
        const replace_list = products.filter((product) => {
            if (wishList.find((item) => item === product.id.toString())) {
                return product;
            }
        })

        return replace_list;
    }, [products, wishList]);

    return products?.length ? (
        <Container data-testid="container-products">
            {filter ? (
                filteredWishList.map((wish_product) => (
                    <ProductCard removeButton product={wish_product} key={wish_product.id} />
                ))
            ) : products.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </Container>
    ) : (
        <h1 data-testid="not-products">Não há produtos disponíveis</h1>
    )
}

export default ProductList;