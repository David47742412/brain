export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    type: process.env.PORT_BD,
    host: process.env.HOST,
    port: parseInt(process.env.PORT_BD, 10),
    database: process.env.DATABASE
  },
});
