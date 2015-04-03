var gulp = require('gulp');
var del = require('del');

//clear all dev folders and sass cache
gulp.task('dev-clean', function(cb) {
	del(['.sass-cache'], cb);
});