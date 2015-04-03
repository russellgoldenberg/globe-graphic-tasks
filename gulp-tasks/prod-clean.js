var gulp = require('gulp');
var del = require('del');

//clear all prod folders and tmp dir
gulp.task('prod-clean', function(cb) {
	del(['.tmp/**', 'prod/**'], cb);
});