import MiniCssExtractPlugin from "mini-css-extract-plugin";

const getCssLoader = (isDev: boolean) => ({
  loader: "css-loader",
  options: {
    modules: {
      auto: (resPath: string) => resPath.includes(".module."),
      exportLocalsConvention: "camelCaseOnly",
      localIdentName: isDev
        ? "[path][name]__[local]--[hash:base64:5]"
        : "[hash:base64:8]",
    },
  },
});

const getPostCssLoader = (isDev: boolean) => ({
  loader: "postcss-loader",
  options: {
    postcssOptions: {
      plugins: [
        [
          "postcss-preset-env",
          {
            stage: 0,
            autoprefixer: true,
          },
          isDev ? null : "cssnano",
        ],
      ],
    },
  },
});

export const cssRule = (isDev: boolean) => {
  const loaders = [
    isDev ? "style-loader" : MiniCssExtractPlugin.loader,
    isDev ? "css-modules-typescript-loader" : "",
    getCssLoader(isDev),
    "sass-loader",
    getPostCssLoader(isDev),
  ];

  return {
    test: /\.s[ac]ss$/i,
    use: loaders.filter(Boolean),
  };
};
