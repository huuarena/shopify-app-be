const { postgresql } = require('../connector/postgresql');
const { ResponseHandler } = require('../utils/responseHandler');

module.exports.find = async () => {
    try {
        const res = await postgresql.query(
            `SELECT templates FROM store_settings`,
        );

        return ResponseHandler.success(res.rows[0].templates || []);
    } catch (error) {
        // check if column not exists
        if (error.message === `column "templates" does not exist`) {
            console.log('add column: templates');

            await postgresql.query(
                `ALTER TABLE store_settings ADD COLUMN templates JSON`,
            );

            return ResponseHandler.success([]);
        }

        return ResponseHandler.error(error);
    }
};

module.exports.update = async (data_stringfy) => {
    try {
        // check input
        if (!data_stringfy) {
            return ResponseHandler.error({ message: 'Data is required' });
        }

        await postgresql.query(
            `UPDATE store_settings SET templates = '${data_stringfy}'`,
        );

        return ResponseHandler.success();
    } catch (error) {
        return ResponseHandler.error(error);
    }
};
