module.exports = {
  development: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "codechef",
    host: process.env.DB_HOST || "mysql",
    dialect: "mysql"
  },  
};
