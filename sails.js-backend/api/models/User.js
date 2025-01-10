module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
      maxLength: 50
    },
    password: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true
    },
    role: {
      type: 'string',
      isIn: ['admin', 'user'],
      defaultsTo: 'user',
    },
    cart: {
      model: 'cart',
      unique: true
    }
  },

  beforeCreate: async (user, proceed) => {

    try {
      const hashedPassword = await AuthService.hashPassword(user.password);
      user.password = hashedPassword;
  
      if (!user.role) {
        user.role = 'user';
      
      }
      return proceed();
    }
    catch (err) {
      return proceed(err);
    }
  },
  afterCreate: async (user, proceed) => {
    try {
      if(!user.cart) {
          const newCart = await Cart.create({
            user: user.id,
            items: [],
        }).fetch();

        await User.updateOne({ id: user.id }).set({ cart: newCart.id });
      }
        
        return proceed();
    } catch (err) {
        sails.log.error('Error creating cart for user:', err);
        return proceed(err); 
    }
},

};

