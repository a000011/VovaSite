import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
// import { Configuration } from "webpack";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { WebpackConfiguration } from "webpack-dev-server";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface Configuration extends WebpackConfiguration {
  devServer?: DevServerConfiguration;
}

const config: Configuration = {
  mode: "production",
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@Assets": path.resolve(__dirname, "public/assets"),
      "@Src": path.resolve(__dirname, "src"),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
  },
};

export default config;
