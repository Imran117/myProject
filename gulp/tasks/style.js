module.exports = () => {
    $.gulp.task('css', () => {
        return $.gulp.src($.path.src.css)
        .pipe($.plugins.plumber())
        .pipe($.sass({ outputStyle: 'expanded'}))    
        .pipe($.plugins.autoprefixer())
        .pipe($.plugins.groupCssMediaQueries())
        .pipe($.sass({ outputStyle: 'compressed'}))    
        .pipe($.plugins.rename('main.min.css'))
        .pipe($.gulp.dest($.path.build.css))
        .on('end', $.bs.reload)
    })
}