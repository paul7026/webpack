import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
      publicPath: "/",
    },

    module: {
      rules: buildLoaders(options),
    },
  };
}
