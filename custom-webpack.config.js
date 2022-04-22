const webpack = require('webpack');
/*
  Este arquivo javascript é necessário para configurar as variáveis de ambiente e podermos sobscrever as variáveis de ambiente via docker
*/
module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        ENVIRONMENT: JSON.stringify(process.env.ENVIRONMENT),
        API_URL: JSON.stringify(process.env.API_URL),
        SOME_API_KEY: JSON.stringify(process.env.SOME_API_KEY),
        SOME_OTHER_API_KEY: JSON.stringify(process.env.SOME_OTHER_API_KEY)
      }
    })
  ]
};