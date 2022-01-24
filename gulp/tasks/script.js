module.exports = () => {
    $.gulp.task('js', () => {
        return $.gulp.src($.path.src.js)
        .pipe($.plugins.plumber())
        .pipe($.plugins.include())
        .pipe($.plugins.babel({
            presets: ['@babel/preset-env', 'minify']
        }))
        .pipe($.plugins.rename('main.min.js'))
        .pipe($.gulp.dest($.path.build.js))
        .on('end', $.bs.reload)
    })
}