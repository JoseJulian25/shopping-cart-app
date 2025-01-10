module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    price: {
      type: 'number',
      required: true
    },
    description: {
      type: 'string',
      required: false
    },
    stock: {
      type: 'number',
      required: true
    },
    image_url: {
      type: 'string',
      required: true
    },
    rating: {
      type: 'number'
    },
    category: {
      model: 'category',
      required: true
    },
    carItem: {
      collection: 'cartitem',
      via: 'product'
    },
    createdAt: false,
    updatedAt: false
  },

};

