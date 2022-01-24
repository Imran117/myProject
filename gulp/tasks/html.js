module.exports = () => {
    $.gulp.task('html', ()=> {
        return $.gulp.src($.path.src.html)
        .pipe($.plugins.plumber())
        .pipe($.plugins.pug())
        .pipe($.gulp.dest($.path.build.html))
        .on('end', $.bs.reload)
    })
}