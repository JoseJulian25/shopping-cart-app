module.exports = {

    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find();
            return res.status(200).json(products);
        } catch (err) {
            sails.log.debug(err)
            return res.status(500).json({error: err.message});
        }
    }
}