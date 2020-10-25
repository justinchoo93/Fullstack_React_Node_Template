const path = require('path');
const express = require('express');
const compression = require('compression');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

/* ----- PARSE REQUESTS ----- */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());

/* ----- STATIC ASSETS ----- */
app.use('/', express.static(path.resolve(__dirname, '../dist')));

/* ----- CATCH-ALL ROUTE HANDLER ----- */
app.use((req, res) => res.sendStatus(404));

/* ----- GLOBAL ERROR HANDLER ----- */
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'ERROR: handler caught unknown middleware error',
    status: 500,
    message: { error: 'An error occured' },
  };
  const error = { ...defaultError, ...err };
  console.error(error.log);
  return res.status(error.status).json(error.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
