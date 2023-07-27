const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "database-4.c94sogndwgy9.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "Lalafpt199603",
    database: "testdb",
  },
  listPerPage: 10,
};

module.exports = config;
