module.exports = {
    'GET /cart/:userId' : 'CartController.getCartByUser',
    'POST /cart/item' : 'CartController.addItem',
    'DELETE /cart/item': 'CartController.deleteItem',
    'PATCH /cart/item/:cartItemId': 'CartController.updateQuantity'
}