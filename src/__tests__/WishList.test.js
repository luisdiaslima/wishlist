import "jsdom-global/register"
import React from 'react';

import { useWishList, WishListProvider } from '../hooks/wishlist';
import { mount } from 'enzyme';

describe("wish test", () => {
    it("should add an element in wishlist", () => {
        const TestComponent = () => {
            const { addToWishList, wishList } = React.useContext(useWishList)
            return (
                <>
                    <div data-testid="value">{wishList}</div>
                    <button onClick={addToWishList("1")}>add</button>
                </>
            )
        }

        const wrapper = mount(
        <WishListProvider>
            <TestComponent />
        </WishListProvider>
        )

        wrapper.find('button').simulate('click')
        expect(wrapper.find('[data-testid="value"]').text()).toEqual("1")
    })
})