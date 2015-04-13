var gulp = require('gulp');

// Default task to be run with `gulp`
gulp.task('default', ['dev-clean', 'dev-css', 'dev-copy', 'dev-assets', 'browser-sync'], function () {
    gulp.watch('src/css/*.styl', ['dev-css']);
    gulp.watch('src/data/copy.json', ['dev-copy']);
    gulp.watch('src/index.hbs', ['dev-copy']);
    gulp.watch('src/assets/**/*', ['dev-assets']);
    gulp.watch('src/index.html', ['browser-sync-reload']);
    gulp.watch('src/js/*.js', ['browser-sync-reload']);
});