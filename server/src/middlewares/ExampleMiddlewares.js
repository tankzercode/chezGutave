
function ExampleMiddleware(req, res, next) {
    console.log('Example log');
    next();
}

module.exports = ExampleMiddleware
// If we have multiple middlewares:
/*
module.exports = {
    MiddlewareOne,
    MiddlewareTwo
}
*/