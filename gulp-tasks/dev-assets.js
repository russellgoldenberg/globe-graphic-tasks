var gulp = require('gulp');
var changed = require('gulp-changed');

//move assets files to dev folder
gulp.task('dev-assets', function(cb) {
	return gulp.src('src/assets/**/*')
		.pipe(changed('dev/assets'))
		.pipe(gulp.dest('dev/assets'));
});
