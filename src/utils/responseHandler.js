/**
 *
 * @param {Object} payload
 */
const success = (payload) => {
    return {
        success: true,
        payload,
    };
};

/**
 *
 * @param {Object} error
 */
const error = (error) => {
    return {
        success: false,
        error,
    };
};

module.exports.ResponseHandler = {
    success,
    error,
};
