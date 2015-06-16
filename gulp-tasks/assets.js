var gulp = require('gulp');
var changed = require('gulp-changed');

var src = 'src/assets/**/*';

gulp.task('assets-dev', function() {
	return gulp.src(src)
		.pipe(changed('dev/assets'))
		.pipe(gulp.dest('dev/assets'));
});

// move assets files to prod folder
gulp.task('assets-prod', function() {
	return gulp.src(src)
		.pipe(changed('prod/assets'))
		.pipe(gulp.dest('prod/assets'));
});