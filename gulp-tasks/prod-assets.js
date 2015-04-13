var gulp = require('gulp');
var changed = require('gulp-changed');

//move assets files to prod folder
gulp.task('prod-assets', function(cb) {
	return gulp.src('src/assets/**/*')
		.pipe(changed('prod/assets'))
		.pipe(gulp.dest('prod/assets'));
});
