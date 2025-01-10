module.exports = {

    getCategories: async (req, res) => {
        try {
            console.log('Accediendo a categories')
            const categories = await Category.find().populate('products');
            return res.status(200).json(categories);
        }catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    }
}