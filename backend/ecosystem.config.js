module.exports = {
  apps: [
    {
      name: 'strapi-dev',
      cwd: '/srv/strapi/jc-custom-builds/backend/',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        DB_HOST: 'localhost',
        DB_PORT: '5432',
        DB_NAME: 'strapi_dev',
        DB_USER: 'strapi',
        DB_PASS: 'strapipassword',
        JWT_SECRET: 'aSecretKey',
      },
    },
  ],
};
