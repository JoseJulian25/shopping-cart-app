

module.exports.policies = {

  '*': ['isAuthorized'],
  'AuthController': {
    'register': true,
    'login': true,
  },
  'ProductController': {
    'getAllProducts': true
  },
  'CategoryController': {
    'getCategories': true
  },
  
};
