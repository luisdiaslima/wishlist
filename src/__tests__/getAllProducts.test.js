import getAllProducts from '../pages/api/getAllProducts';

describe("Get all products", () => {
    test("check if we have any products", async () => {
        const products = await getAllProducts();
        expect(products.length > 0).toBeTruthy();
    });
});