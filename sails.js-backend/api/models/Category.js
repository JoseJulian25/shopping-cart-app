

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
      maxLength: 50
    },
    description: {
      type: 'string',
      required: false
    },
    products: {
      collection: 'product',
      via: 'category'
    },
    createdAt: false,
    updatedAt: false

  },

};

