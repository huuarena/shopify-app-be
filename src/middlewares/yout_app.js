const { postgresql } = require('../connector/postgresql');
const { ResponseHandler } = require('../utils/responseHandler');

module.exports.find = async (store_name) => {
    try {
        const res = await postgresql.query(
            `select * from yout_app where store_name = '${store_name}';`,
        );

        if (res.rows.length) {
            return ResponseHandler.success(res.rows[0]);
        } else {
            return ResponseHandler.error({ message: 'No data found' });
        }

        return ResponseHandler.success(res.rows.length ? res.rows[0] : {});
    } catch (error) {
        if (error.message === 'relation "yout_app" does not exist') {
            await postgresql.query(
                `create table if not exists yout_app ( 
                    store_name varchar unique not null primary key, 
                    youtube_api json not null default '{}',
                    widgets json not null default '{}'
                );`,
            );

            await postgresql.query(`insert into yout_app (store_name) values ('${store_name}');`);

            const res = await postgresql.query(
                `select * from yout_app where store_name = '${store_name}';`,
            );

            if (res.rows.length) {
                return ResponseHandler.success(res.rows[0]);
            } else {
                return ResponseHandler.error({ message: 'No data found' });
            }
        }

        return ResponseHandler.error(error);
    }
};

module.exports.update = async (store_name, field, data_stringify) => {
    try {
        // check data
        if (!store_name || !field || !data_stringify) {
            return ResponseHandler.error({ message: 'Invalid data' });
        }

        await postgresql.query(
            `update yout_app set ${field} = '${data_stringify}' where store_name = '${store_name}'`,
        );

        const res = await postgresql.query(
            `select * from yout_app where store_name = '${store_name}';`,
        );

        if (res.rows.length) {
            return ResponseHandler.success(res.rows[0]);
        } else {
            return ResponseHandler.error({ message: 'No data found' });
        }
    } catch (error) {
        return ResponseHandler.error(error);
    }
};
