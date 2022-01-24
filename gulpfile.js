global.$ = require('./gulp.config')

$.path.tasks.forEach(task => require(task)());

if($.dev) {
    $.gulp.series($.gulp.parallel('html', 'css', 'js', 'font', 'img', 'watch', 'server'))()
}else {
    $.gulp.src($.path.serverDir, {read: false})
    .pipe($.plugins.clean({force:true}))
    .pipe($.gulp.dest('./app/').on('end', $.gulp.series($.gulp.parallel('html', 'css', 'js', 'font', 'img'))))
}