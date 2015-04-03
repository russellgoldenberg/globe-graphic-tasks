var gulp = require('gulp');

// Default task to be run with `gulp`
gulp.task('default', ['dev-clean', 'css', 'browser-sync'], function () {
    gulp.watch('src/css/*.scss', ['css']);
    gulp.watch('src/index.html', ['bs-reload']);
    gulp.watch('src/js/*.js', ['bs-reload']);
});