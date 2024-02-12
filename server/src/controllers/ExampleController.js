const ExampleUtils = require('../utils/ExampleUtils');

// The function name should represent it's use case and what it does (get..., create..., get...WithId, ...)
function getExampleText(req, res) {
    res.send(ExampleUtils.getExample());
}

module.exports = {
    getExampleText
};