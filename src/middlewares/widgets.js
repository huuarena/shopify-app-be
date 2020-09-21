const { postgresql } = require('../connector/postgresql');
const { ResponseHandler } = require('../utils/responseHandler');

/**
 *
 * @param {String} store_name
 * @param {String} id
 */
module.exports.findById = async (store_name, id) => {
    try {
        // check input
        if (!id) {
            return ResponseHandler.error({ message: 'Invalid input data' });
        }

        // get widgets
        const res = await postgresql.query(
            `select widgets from yout_app where store_name = '${store_name}';`,
        );

        // get widget by id
        if (res.rows.length && res.rows[0] && res.rows[0].widgets && res.rows[0].widgets.length) {
            for (let i = 0; i < res.rows[0].widgets.length; i++) {
                const element = res.rows[0].widgets[i];
                if (element.id === id) {
                    return ResponseHandler.success(element);
                }
            }
        }

        return ResponseHandler.success({});
    } catch (error) {
        return ResponseHandler.error(error);
    }
};
