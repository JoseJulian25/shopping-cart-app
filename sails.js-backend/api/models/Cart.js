
module.exports = {

  attributes: {
    user: {
      model: 'user',
      required: true,
      unique: true
    },
    items: {
      collection: 'cartitem',
      via: 'cart'
    }
  },

};

