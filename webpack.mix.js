let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath('public')
    .js('resources/js/app.js','public/js')
    .sass('resources/sass/app.scss','public/css');


mix.webpackConfig({
    resolve :{
        alias : {
            "@" : path.resolve(__dirname, 'resources/js'),
            "@sass" : path.resolve(__dirname, 'resources/sass'),
        }
    }
})