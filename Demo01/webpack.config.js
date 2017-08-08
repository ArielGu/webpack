const HtmlWebpackPlugin=require('html-webpack-plugin');
const webpack=require('webpack');
const path=require('path');
const CleanWebpackPlugin=require('clean-webpack-plugin');



const config={
	entry:{
		app:'./src/index.js',
		search:'./src/search.js'
	},
	//devtool:'inline-source-map',
	devServer: {
	 	hot:true,
     	contentBase: path.resolve(__dirname,'./dist'),
     	publicPath:'/'
   },
	plugins:[
		//new CleanWebpackPlugin(['dist']),
		new webpack.optimize.UglifyJsPlugin(),
		new HtmlWebpackPlugin({
			//template:'./index.html'
			title:'Development'
		}),
		new webpack.HotModuleReplacementPlugin() //启用HMR
	],
	module:{
		rules:[
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},{
				test:/\.(js|jsx)$/,
				use:'babel-loader'
			}
		]
	},
	output:{
		filename:'[name].bundle.js',
		path:path.resolve(__dirname,'dist'),
	},
	
	
};

module.exports=config;