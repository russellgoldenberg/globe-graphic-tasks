var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var cmq = require('gulp-combine-media-queries');
var rename = require('gulp-rename');

//compile all sass and autoprefix and minify
gulp.task('prod-css', function() {
	gulp.src('srcs/css/prod.scss')
        .pipe(sass())
		.pipe(autoprefixer())
		.pipe(cmq({ log: true }))
		.pipe(minifycss())
		.pipe(rename('main.css'))
		.pipe(gulp.dest('.tmp/css'))	
});