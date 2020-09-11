const { postgresql } = require('../connector/postgresql');
const { ResponseHandler } = require('../utils/responseHandler');

module.exports.find = async () => {
    try {
        const res = await postgresql.query(
            `SELECT widgets FROM store_settings`,
        );

        return ResponseHandler.success(res.rows[0].widgets || []);
    } catch (error) {
        // check if column not exists
        if (error.message === `column "widgets" does not exist`) {
            console.log('add column: widgets');

            await postgresql.query(
                `ALTER TABLE store_settings ADD COLUMN widgets JSON`,
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
            `UPDATE store_settings SET widgets = '${data_stringfy}'`,
        );

        return ResponseHandler.success();
    } catch (error) {
        return ResponseHandler.error(error);
    }
};
