var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');

// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task('sass', function () {
    return sass('src/css/dev.scss', {
			style: 'expanded', 
			compass: true
		})
		.on('error', handleErrors)
		.pipe(autoprefixer())
		.pipe(rename('main.css'))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.reload({stream:true}));
});

var handleErrors = function() {
	var args = Array.prototype.slice.call(arguments);
	var error = args[0].message;

	notify.onError({
	title: 'Sass compile error',
	message: 'See terminal'
	}).apply(this, args);

	console.log(error);
	this.emit('end');
};

gulp.task('bs-reload', function () {
    browserSync.reload();
});