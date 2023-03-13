module.exports = {
    development: {
    database: 'my_dev_database',
    username: 'my_dev_username',
    password: 'my_dev_password',
    dialect: 'mysql',
    host: 'localhost'
    },
    test: {
    database: 'my_test_database',
    username: 'my_test_username',
    password: 'my_test_password',
    dialect: 'mysql',
    host: 'localhost'
    },
    production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: 'mysql',
    host: process.env.DB_HOST
    }
    };