import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}
	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	}
	const babelLoader = {
		test: /\.(js|jsx|ts|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				plugins: [
					[
						'i18next-extract',
						{
							nsSeparator: '~',
							locales: ['ru', 'en'],
							ketAsDefaultValue: true,
						},
					],
				],
			},
		},
	}
	const svgLoader = {
		test: /\.svg$/,
		use: [
			{
				loader: '@svgr/webpack',
			},
		],
	}
	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						localIdentName: isDev
							? '[name]-[hash:base64:12]'
							: '[hash:base64:8]',
					},
				},
			},
			{
				loader: 'sass-loader',
				options: {
					api: 'modern',
				},
			},
		],
	}

	return [babelLoader, typescriptLoader, cssLoader, svgLoader, fileLoader]
}
