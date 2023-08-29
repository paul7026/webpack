import { PluginItem } from "@babel/core";
import babelRemovePropsPlugin from "../../babel/babelRemovePropsPlugin";
import { BuildOptions } from "../types/config";

interface BabelRuleProps extends BuildOptions {
  isTsx?: boolean;
}

export const babelRule = ({ isDev, isTsx }: BabelRuleProps) => {
  const isProd = !isDev;

  const plugins: PluginItem[] = [
    ["@babel/plugin-transform-typescript", { isTsx }],
    "@babel/plugin-transform-runtime",
  ];

  if (isTsx && isProd) {
    plugins.push([babelRemovePropsPlugin, { props: ["data-testid"] }]);
  }

  if (isDev) {
    plugins.push(require.resolve("react-refresh/babel"));
  }

  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        cacheDirectory: true,
        presets: ["@babel/preset-env"],
        plugins: plugins.filter(Boolean),
      },
    },
  };
};
