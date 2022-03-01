const path = require("path");

// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     path: __dirname + "/dist",
//     publicPath: "/",
//     filename: "bundle.js",
//   },
//   devServer: {
//     static: "./",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: ["babel-loader"],
//       },
//     ],
//   },
// };
// -------------------------
// module.exports = {
//   entry: path.resolve(__dirname, "src", "index.js"),
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "bundle.js",
//   },
//   devServer: {
//     static: path.resolve(__dirname, "dist"),
//     open: true,
//     port: 9000,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(jsx|js)$/,
//         include: path.resolve(__dirname, "src"),
//         exclude: /node_modules/,
//         use: [
//           {
//             loader: "babel-loader",
//             options: {
//               presets: [
//                 [
//                   "@babel/preset-env",
//                   {
//                     targets: "defaults",
//                   },
//                 ],
//                 "@babel/preset-react",
//               ],
//             },
//           },
//         ],
//       },
//     ],
//   },
// };
// -----------------------

console.log(__dirname);
console.log("hello");
// module.exports = {
//   entry: path.resolve(__dirname, "src", "index.js"),
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "bundle.js",
//   },
// };
module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    open: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: "defaults",
                  },
                ],
                "@babel/preset-react",
              ],
            },
          },
        ],
      },
    ],
  },
};
