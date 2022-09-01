module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], 
    plugins: [
      [
        'module-resolver', 
        {
          root: './src',
          alias: {
            '@Assets': './src/assets',
            '@Components': './src/components',
            '@Routes': './src/routes',
            '@Screens': './src/screens',
            '@Services': './src/services',
            '@Themes': './src/themes',
          }
        }
      ]
    ]
  };
};
