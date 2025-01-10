
var jwt = require('jsonwebtoken');

module.exports = {
  friendlyName: 'Verify JWT',
  description: 'Verify a JWT token.',

  inputs: {
    req: {
      type: 'ref',
      description: 'A reference to the request object',
      required: true
    },
    res: {
      type: 'ref',
      description: 'A reference to the response object',
      required: true
    }
  },


  exits: {
    invalid: {
      description: 'Invalid token or no authentication present.',
    },
  },

  fn: async function (inputs, exits) {
    var req = inputs.req;
    var res = inputs.res;

    if (req.header('authorization')) {
      var token = req.header('authorization').split('Bearer ')[1];

      if(!token) return exits.invalid();

      return jwt.verify(token, process.env.JWT_SECRET, async function(err, payload) {
        if (err || !payload.sub) return exits.invalid();

        var user =  await User.findOne(payload.sub)
        if (!user) return exits.invalid();

        req.user = user;
        return exits.success(user);
    })
  }
  return exits.invalid();
}
}
