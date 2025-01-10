import apiClient from '../config/axios';

const ShoppingCartService = {

    async getCart(userId) {
        const { data } = await apiClient.get(`/cart/${userId}`);
        return data;
    },

    async addItem(userId, productId, quantity) {
        const { data } = await apiClient.post('/cart/item', {userId, productId, quantity});
        return data;
    },

    async removeItem(userId, productId) {
        const {data} = await apiClient.delete('/cart/item', {data: {userId, productId} });
        return data;
    },

    async updateItemQuantity(cartItemId, quantity) {
        const { data } = await apiClient.patch(`/cart/item/${cartItemId}`, {quantity});
        return data;
    }
}

export default ShoppingCartService;