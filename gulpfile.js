var elixir = require('laravel-elixir');
var domain = 'http://testingwpp.local/git-helptobuycal/';
// var themeDir = '/';
var themelibDir = 'library/';
elixir.config.assetsPath = themelibDir
elixir.config.publicPath = themelibDir
elixir.config.css.outputFolder = 'css';
elixir.config.css.sass.folder = 'scss';
elixir(function(mix) {
	mix.sass('style.scss');
});
elixir(function(mix) {
	var frontendScripts = [
		'libs/*.js',
		'scripts.js'
	];
  mix.scripts(frontendScripts, themelibDir+'js/scripts.min.js');
});
elixir(function(mix) {
	mix.browserSync({
		open: false,
		proxy: domain,
		injectChanges: true,
		files: [
			// themeDir+'/**/*.php',
			themelibDir+'/css/**/*.css',
			themelibDir+'/scss/sass/**/*.scss',
			themelibDir+'/js/**/*.js'
		]
	});
});
