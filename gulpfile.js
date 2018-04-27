var gulp = require('gulp');
var server = require('gulp-webserver');

gulp.task('default', function() {
    gulp.src('.')
        .pipe(server({
            host: 'localhost',
            port: 9090,
            open: true,
            livereload: true,
            middleware: function(req, res, next) {
                next()
            }
        }))
})