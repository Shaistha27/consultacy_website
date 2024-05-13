const errorHandler = (req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    return res.status(statusCode).json({
success: false,
error : error.message
    });
};

module.exports = errorHandler;