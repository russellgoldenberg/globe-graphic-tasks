var gulp = require('gulp');

//combine all html parts
gulp.task('prod-html', function() {
	return gulp.src('src/index.html')
		.pipe(gulp.dest('.tmp'));
});
