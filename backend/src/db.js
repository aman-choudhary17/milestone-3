const config = {
    server: 'webshopdbserver.database.windows.net',
    database: 'webshopdb',
    driver: 'msnodesqlv8',
    user: 'adminuser',
    password: '@Man9266585729',
    option: {
        trustedConnection: true,
        enableArithAbort: true,
        trustServerCertificate: true,
        // instancename: 'SQLEXPRESS'
    },
};

module.exports = config;