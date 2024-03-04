const CustomAPIError = require('./custom-error')
const {StatusCodes} = require('http-status-codes')

class Unauthenticated extends CustomAPIError {
    constructor(message) {
        super(message);
        this.status = StatusCodes.UNAUTHORIZED;
    }
}

module.exports = Unauthenticated
