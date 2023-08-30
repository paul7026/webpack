import { RuleSetRule } from "webpack";
import { babelRule } from "./rules/babel";
import { BuildOptions } from "./types/config";
import { cssRule } from "./rules/styles";

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options;

  const codeBabelLoader = babelRule({ ...options, isTsx: false });

  const tsxCodeBabelLoader = babelRule({ ...options, isTsx: true });

  const cssLoader = cssRule(isDev);

  return [codeBabelLoader, tsxCodeBabelLoader, cssLoader];
};
