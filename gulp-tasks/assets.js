var gulp = require('gulp');
var changed = require('gulp-changed');

var src = 'src/assets/**/*';

//move assets files to prod folder
gulp.task('assets-prod', function(cb) {
	return gulp.src(src)
		.pipe(changed('prod/assets'))
		.pipe(gulp.dest('prod/assets'));
});

