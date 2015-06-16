var gulp = require('gulp');
var babel = require('gulp-babel');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

gulp.task('js-dev', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('dev/js'))
		.pipe(browserSync.reload({stream:true}));
});

//jshint and uglify js files
gulp.task('js-prod', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('default'))
		.pipe(uglify())
		.pipe(gulp.dest('.tmp/js'));
});