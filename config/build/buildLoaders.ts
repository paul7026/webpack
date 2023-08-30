import { RuleSetRule } from 'webpack'
import { babelRule } from './rules/babel'
import { fileRule } from './rules/file'
import { cssRule } from './rules/styles'
import { svgRule } from './rules/svg'
import { BuildOptions } from './types/config'

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options

  const fileLoader = fileRule()

  const svgLoader = svgRule()

  const codeBabelLoader = babelRule({ ...options, isTsx: false })

  const tsxCodeBabelLoader = babelRule({ ...options, isTsx: true })

  const cssLoader = cssRule(isDev)

  return [fileLoader, svgLoader, codeBabelLoader, tsxCodeBabelLoader, cssLoader]
}
