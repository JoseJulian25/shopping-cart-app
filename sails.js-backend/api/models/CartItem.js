
module.exports = {

  attributes: {
    cart: {
      model: 'cart'
    },
    product: {
      model: 'product',
      required: true
    },
    quantity: {
      type: 'number',
      required: true
    }
  },

};

