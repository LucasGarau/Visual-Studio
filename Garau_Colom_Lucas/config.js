module.exports = {
    context: __dirname + "/app",
    entry: {
      javascript: "./app.js",
      html: "./index.html"
    },
  
  
    output: {
      filename: "app.js",
      path: __dirname + "/dist"
    },
  
  
    module: {
      loaders: [
        //JAVASCRIPT
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ["babel-loader"],
        },
  
        //Index HMTML
        {
          test: /\.html$/,
          loader: "file?name=[name].[ext]",
        },
        //Hotloader
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ["react-hot", "babel-loader"],
        },
  
        // SASS
        {
          test: /\.scss$/,
          loader: 'style!css!sass'
        }
  
      ],
    }
  
  }