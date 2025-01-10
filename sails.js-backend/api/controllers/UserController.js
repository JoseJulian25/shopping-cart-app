module.exports = {

    getCart: async (req, res) => {
        const userId = req.params.userId;
        try {
            const user = await User.findOne({id: userId});

            if (!user) {
                return res.status(404).json({error: 'User not found'});
            }

            const cart = await Cart.find({user: userId});
            
            return res.status(200).json(cart);
        } catch (err) {
            sails.log.debug(err)
            return res.status(500).json({error: err.message});
        }
    },
}