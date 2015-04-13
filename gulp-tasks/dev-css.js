var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');

// Sass task, will run when any styl files change & BrowserSync
// will auto-update browsers
gulp.task('dev-css', function () {
	gulp.src('src/css/dev.styl')
        .pipe(stylus())
		.pipe(autoprefixer())
		.pipe(rename('main.css'))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.reload({stream:true}));
});