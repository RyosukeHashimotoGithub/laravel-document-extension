import { ConfigurationFactory } from 'webpack'
import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const config: ConfigurationFactory = () => {
  return {
    entry: {
      background: path.join(__dirname, 'src', 'background.ts'),
      contentScript: path.join(__dirname, 'src', 'contentScript.ts')
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /.ts$/,
          use: 'ts-loader',
          exclude: '/node_modules/'
        }
      ]
    },
    resolve: {
      extensions: ['ts', 'js']
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: 'public', to: '.' }
      ])
    ],
    mode: "none"
  }
}

export default config
