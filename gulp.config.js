module.exports = {
    gulp: require('gulp'),
    plugins: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    dev: process.argv.pop() === 'dev',
    sass: require('gulp-sass')(require('sass')),
    path: {
       serverDir: './app/dist/',
       tasks: require('./gulp/config/index'),
       src: {
           html:    './app/src/*.{html,pug,jade}',
           css:     './app/src/style/main.scss',
           js:      './app/src/js/*.js',
           font:    './app/src/font/**/*.ttf',
           img:     './app/src/images/**/*.{gif,jpeg,jpg,png,webp}'
       },
       build: {
           html:    './app/dist/',
           css:     './app/dist/style/',
           js:      './app/dist/js/',
           font:    './app/dist/font/',
           img:     './app/dist/images/'  
       },
       watch: {
           html:    ['./app/src/*.{html,pug,jade}', './app/src/view/_*.{html,pug,jade}'],
           css:     './app/src/style/**/*.scss',
           js:      './app/src/js/*.js',
           font:    './app/src/fonts/*.*',
           img:     './app/src/images/**/*.*'
       }
   }
}