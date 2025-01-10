const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {

    generateJwt: (payload) => {
        return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d'});
    },

    verifyJwt: (token) => {
        try {
            return jwt.verify(token, process.env.JWT_SECRET);
        }catch(err) {
            throw err;
        }
    },

    hashPassword: async (password) => {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    },

    comparePassword: async (password, hash) => {
        return bcrypt.compare(password, hash);
    }

}