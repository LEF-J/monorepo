module.exports = {
  root     : true,
  // This tells ESLint to load the config from the package `configs`
  ...require('configs/eslintrc.js'),
  settings : {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
