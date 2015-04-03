var gulp = require('gulp');

//move media files to prod folder
gulp.task('prod-media', function(cb) {
	return gulp.src('src/media/**/*')
		.pipe(gulp.dest('prod/media'));
});
