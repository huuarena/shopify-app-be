const success = (payload) => {
    return {
        success: true,
        payload,
    };
};

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
