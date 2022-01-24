module.exports = () => {
    $.gulp.task('img', ()=> {
        return $.gulp.src($.path.src.img)
        .pipe($.plugins.plumber())
        .pipe($.plugins.webp())
        .pipe($.gulp.dest($.path.build.img))
        .on('end', $.bs.reload)
    })
}