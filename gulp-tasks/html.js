var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var browserSync = require('browser-sync');

var src = 'src/index.html';

//combine all html parts
gulp.task('html-dev', function() {
	return gulp.src(src)
		.pipe(fileinclude())
		.pipe(gulp.dest('dev'))
		.pipe(browserSync.reload({ stream:true }));
});

//combine all html parts
gulp.task('html-prod', function() {
	return gulp.src(src)
		.pipe(fileinclude())
		.pipe(gulp.dest('.tmp'));
});