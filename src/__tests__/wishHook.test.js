/**
 * @jest-environment jsdom
 */
import React from 'react';

import { render, waitFor } from '@testing-library/react';
import ProductList from '../components/ProductsList/index';
import getAllProducts from '../pages/api/getAllProducts';
import { WishList, WishListProvider } from '../hooks/wishlist';

import Enzyme, { mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe("Wish list", () => {
    it('should render not products message', async () => {
        const { getByTestId } = render(<ProductList  />)
        const fieldNode = await waitFor(() => getByTestId('not-products'));

        expect(fieldNode).not.toBeNull();
    });

    it('should render all products in ProductsList', async () => {
        const products = await getAllProducts();
        const { getByTestId } = render(<ProductList products={products} />)
        const fieldNode = await waitFor(() => getByTestId('container-products'));

        expect(fieldNode).not.toBeNull();
    });

    it('should add first product to wishList', async () => {
        const TestComponent = () => {
            const { addToWishList, wishList, resetWishList } = React.useContext(WishList)

            return (
                <>
                <div data-testid="value">{wishList}</div>
                <button data-testid="add" onClick={() => addToWishList('1')}>add</button>
                <button data-testid="reset" onClick={resetWishList}>reset</button>
                </>
            );
        }
        
        const wrapper = mount(
        <WishListProvider>
            <TestComponent />
        </WishListProvider>
        );

        expect(wrapper.find('[data-testid="value"]').text()).toEqual("");
        wrapper.find('[data-testid="add"]').simulate('click');
        expect(wrapper.find('[data-testid="value"]').text()).toEqual("1");
        wrapper.find('[data-testid="reset"]').simulate('click');
    });

    it('should add first product to wishList and after remove', async () => {
        const TestComponent = () => {
            const { addToWishList, removeFromWishList, resetWishList, wishList } = React.useContext(WishList)

            return (
                <>
                <div data-testid="value">{wishList}</div>
                <button data-testid="add" onClick={() => addToWishList('1')}>add</button>
                <button data-testid="remove" onClick={() => removeFromWishList('1')}>remove</button>
                <button data-testid="reset" onClick={resetWishList}>reset</button>
                </>
            );
        }
        
        const wrapper = mount(
        <WishListProvider>
            <TestComponent />
        </WishListProvider>
        );

        wrapper.find('[data-testid="add"]').simulate('click');
        expect(wrapper.find('[data-testid="value"]').text()).toEqual("1");
        wrapper.find('[data-testid="remove"]').simulate('click');
        expect(wrapper.find('[data-testid="value"]').text()).toEqual("");
        wrapper.find('[data-testid="reset"]').simulate('click');
    });

    it('should add multiple products', async () => {
        const TestComponent = () => {
            const { addToWishList, resetWishList, wishList } = React.useContext(WishList)

            const handleAddMultipleProducts = () => {
                addToWishList('1');
                addToWishList('2');
                addToWishList('3');
            }
            return (
                <>
                <div data-testid="value">{wishList}</div>
                <button data-testid="add-multiple-products" onClick={handleAddMultipleProducts}>add multiple products</button>
                <button data-testid="reset" onClick={resetWishList}>reset</button>
                </>
            );
        }
        
        const wrapper = mount(
        <WishListProvider>
            <TestComponent />
        </WishListProvider>
        );

        wrapper.find('[data-testid="add-multiple-products"]').simulate('click');
        expect(wrapper.find('[data-testid="value"]').text()).toEqual("123");
        wrapper.find('[data-testid="reset"]').simulate('click');
    });
})