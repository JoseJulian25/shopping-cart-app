const ProductRoute = require("../api/routes/ProductRoute");
const AuthRoutes = require("../api/routes/AuthRoutes");
const UserRoutes = require("../api/routes/UserRoutes");
const CategoryRoutes = require("../api/routes/CategoryRoutes");
const CartRoutes = require("../api/routes/CartRoutes");

module.exports.routes = {
    ...AuthRoutes,
    ...ProductRoute,
    ...UserRoutes,
    ...CategoryRoutes,
    ...CartRoutes
};
