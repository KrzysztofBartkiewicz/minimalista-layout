const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
   devtool: "source-map",
   mode: "development",

   module: {
      rules: [
         {
            test: /\.s[ac]ss$/i,
            loader: [
               "style-loader",
               {
                  loader: "css-loader",
                  options: {
                     sourceMap: true,
                  },
               },
               {
                  loader: "sass-loader",
                  options: {
                     sourceMap: true,
                  },
               },
            ],
         },
         {
            test: /\.css$/i,
            loader: [
               "style-loader",
               {
                  loader: "css-loader",
                  options: {
                     sourceMap: true,
                  },
               },
            ],
         },
      ],
   },

   devServer: {
      host: "192.168.0.106", //your ip address
      port: 8080,
      disableHostCheck: true,
   },
});
