require('dotenv').config();

const devConfig = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET_DEV,
  MONGO_URL: process.env.MONGO_URL_DEV,
};

const testConfig = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: 'ewtijwebgi22eg9w98u9283982t!!u1h28h1t1h89u9h@$$',
  MONGO_URL: 'mongodb://localhost/nodejs-api-test',
};

const prodConfig = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET_PROD,
  MONGO_URL: process.env.MONGO_URL_PROD,
};

function envConfig(env) {
  switch (env) {
  case 'development':
    return devConfig;
  case 'test':
    return testConfig;
  default:
    return prodConfig;
  }
}

module.exports = envConfig(process.env.NODE_ENV);
