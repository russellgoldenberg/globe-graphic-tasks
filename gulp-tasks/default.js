var gulp = require('gulp');

// Default task to be run with `gulp`
gulp.task('default', ['clean-dev', 'css-dev', 'copy-dev', 'browser-sync'], function () {
    gulp.watch('src/css/*.styl', ['css-dev']);
    gulp.watch('src/data/copy.json', ['copy-dev']);
    gulp.watch('src/index.hbs', ['copy-dev']);
    gulp.watch('src/assets/**/*', ['assets-dev']);
    gulp.watch('src/index.html', ['browser-sync-reload']);
    gulp.watch('src/js/*.js', ['browser-sync-reload']);
});