require('dotenv/config');

module.exports = {
  dialect: 'sqlite',
  host: 'localhost',
  storage: './src/database/db.sqlite',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
