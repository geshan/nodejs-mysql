const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'remotemysql.com',
    user: env.DB_USER || '2ZE90yGC6G',
    password: env.DB_PASSWORD || 'JZFqXibSmX',
    database: env.DB_NAME || '2ZE90yGC6G',
    port: env.DB_PORT || '3306',
    waitForConnections: true,
    connectionLimit: env.DB_CONN_LIMIT || 2,
    queueLimit: 0,
    debug: env.DB_DEBUG || false
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};
  
module.exports = config;
