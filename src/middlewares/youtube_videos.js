const { postgresql } = require('../connector/postgresql');
const { ResponseHandler } = require('../utils/responseHandler');

module.exports.find = async (store_name) => {
    try {
        const res = await postgresql.query(
            `select youtube_videos from yout_app where store_name = '${store_name}';`,
        );

        return ResponseHandler.success(
            res.rows.length ? res.rows[0].youtube_videos : {},
        );
    } catch (error) {
        return ResponseHandler.error(error);
    }
};

module.exports.update = async (store_name, data_stringfy) => {
    try {
        // check input
        if (!store_name || !data_stringfy) {
            return ResponseHandler.error({ message: 'Invalid input' });
        }

        await postgresql.query(
            `update yout_app set youtube_videos = '${data_stringfy}' where store_name = '${store_name}'`,
        );

        return ResponseHandler.success();
    } catch (error) {
        return ResponseHandler.error(error);
    }
};
