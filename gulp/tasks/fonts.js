module.exports = () => {
    $.gulp.task('font', () => {
        return $.gulp.src($.path.src.font)
        .pipe($.plugins.plumber())
        .pipe($.plugins.ttf2woff())
        .pipe($.gulp.dest($.path.build.font))
        .on('end', $.bs.reload)
    })
}