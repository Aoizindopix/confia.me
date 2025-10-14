module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@factories": "./src/factories",
            "@hooks": "./src/hooks",
            "@stores": "./src/stores",
            "@utils": "./src/utils",
            "@assets": "./src/assets"
          }
        }
      ]
    ]
  };
};
