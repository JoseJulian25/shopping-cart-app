/**
 * UserControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;

            let newUser = await User.create({
                name,
                email,
                password
            }).fetch();

            const token = AuthService.generateJwt({id: newUser.id , role: newUser.role, name})
            sails.log.debug("USER CREATED: ", token)

            return res.status(201).json({user: newUser, token});
        }catch(err) {
            sails.log.debug(err)
            return res.status(500).json({error: err.message});
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({email});

            if (!user) {
                return res.status(404).json({error: 'User not found'});
            }

            const match = await AuthService.comparePassword(password, user.password);

            if (!match) {
                return res.status(401).json({error: 'Invalid password'});
            }

            if(user.cart) {
               user.cart = User.findOne({id: user.cart.id}).populate('items')
            }

            const accessToken = AuthService.generateJwt({ name: user.name, id: user.id , email, role: user.role});

            return res.status(200).json({user, token: accessToken});
        }catch(err) {
            sails.log.debug(err)
            return res.status(500).json({error: err.message});
        }
    },

    logout: async (req, res) => {
        res.clearCookie('refreshToken');
        return res.status(200).json('Logged out successfully')
    },

    checkToken: async (req, res) => {
        return res.status(200).json(req.token);
    }
    

};

