var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');

// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task('dev-css', function () {
	gulp.src('src/css/dev.scss')
        .pipe(sass())
		.pipe(autoprefixer())
		.pipe(rename('main.css'))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.reload({stream:true}));
});