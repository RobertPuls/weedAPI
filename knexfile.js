// Update with your config settings.

module.exports = {

  development: {
    client: "postgresql",
    connection: "postgres://localhost/weedAPI"
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
