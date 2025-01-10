module.exports = {

    getCartByUser: async (req, res) => {
        try {
            console.log("Buscando carrito del usuario para usuario: ", req.params.userId)
             
            const cart = await Cart.findOne({ user: req.params.userId }).populate('items');
               
    
            if (!cart) {
                return res.status(404).json({ message: "Cart not found" });
            }

            for (let i = 0; i < cart.items.length; i++) {
                cart.items[i] = await CartItem.findOne({ id: cart.items[i].id })
                    .populate('product'); 
            }

            for (let i = 0; i < cart.items.length; i++) {
                cart.items[i].product = await Product.findOne({ id: cart.items[i].product.id })
                    .populate('category'); 
            }
    
            const { user, ...cartWithoutUser } = cart;
    
            return res.status(200).json(cartWithoutUser);
        } catch(err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },

    addItem: async (req, res) => {
        try {
            const { userId, productId, quantity } = req.body;
            sails.log.debug({ userId, productId, quantity });
    
           
            const cart = await Cart.findOne({ user: userId });
            if (!cart) {
                return res.status(404).json({ error: 'Cart not found' });
            }
    
        
            let existingItem = await CartItem.findOne({ cart: cart.id, product: productId });
    
            if (existingItem) {
               
                existingItem.quantity += quantity;
                await CartItem.update({ id: existingItem.id }).set({ quantity: existingItem.quantity });
            } else {
                await CartItem.create({ cart: cart.id, product: productId, quantity });
            }
    
            return res.status(200).json("Producto actualizado en el carrito");
        } catch (err) {
            sails.log.debug(err);
            return res.status(500).json({ error: err.message });
        }
    },
    
    deleteItem: async (req, res) => {
        try {
            const { userId, productId } = req.body;
            console.log({userId, productId});
    
            const cart = await Cart.findOne({ user: userId });
            if (!cart) {
                return res.status(404).json({ error: 'Cart not found' });
            }
    
            const cartItem = await CartItem.findOne({ cart: cart.id, product: productId });
            if (!cartItem) {
                return res.status(404).json({ error: 'Cart item not found' });
            }
    
            await CartItem.destroy({ id: cartItem.id });
    
            return res.status(200).json("Producto eliminado del carrito");
        } catch (err) {
            return res.serverError(err);
        }
    },

    updateQuantity: async (req, res) => {
        try {
          const { cartItemId } = req.params; 
          const { quantity } = req.body; 
    
          if (!cartItemId || !quantity) {
            return res.status(400).json({ message: 'El ID del cartItem y la cantidad son requeridos.' });
          }
    
          if (quantity < 1) {
            return res.status(400).json({ message: 'La cantidad debe ser al menos 1.' });
          }
    
          CartItem.updateOne({ id: cartItemId }).set({ quantity });
    
          return res.status(200).json({
            message: 'Cantidad actualizada correctamente.',
          });
        } catch (error) {
          sails.log.error('Error al actualizar la cantidad del cartItem:', error);
          return res.status(500).json({ message: 'Error interno del servidor.', error });
        }
      },
    
}