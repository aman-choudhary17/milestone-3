const config = {
    server: 'webshopdbserver.database.windows.net',
    databse: 'webshopdb',
    user: 'adminuser',
    password: '@Man9266585729',
    option: {
        trustedConnection: true,
        enableArithAbort: true,
        trustServerCertificate: true,
    },
    port: 1433
};

module.exports = config;