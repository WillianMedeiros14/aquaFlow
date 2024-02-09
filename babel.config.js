module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@assets": "./src/assets",
            "@features": "./src/features",
            "@global": "./src/global",
            "@theme": "./src/theme",
          },
          extensions: [".js", ".jsx", ".tsx", ".ts", ".json"],
        },
      ],
    ],
  };
};
