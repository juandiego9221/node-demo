const boom = require("@hapi/boom");

function validatorHandler(schema, propery) {
  return (req, res, next) => {
    const data = req[propery];
    const { error } = schema.validate(data);
    if (error) {
      next(boom.badRequest(error));
    }
  };
}

module.exports = validatorHandler;
