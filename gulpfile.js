var gulp = require('gulp');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var del = require('del');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var minifycss = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var smoosher = require('gulp-smoosher');


/* --------- */
/* DEV TASKS */
/* --------- */

// Default task to be run with `gulp`
gulp.task('default', ['dev-clean', 'sass', 'browser-sync'], function () {
    gulp.watch('src/css/*.scss', ['sass']);
    gulp.watch('src/index.html', ['bs-reload']);
    gulp.watch('src/js/*.js', ['bs-reload']);
});

//clear all dev folders and sass cache
gulp.task('dev-clean', function(cb) {
	del(['.sass-cache'], cb);
});

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'src'
        },
        notify: false,
        ghostMode: false
    });
});

// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task('sass', function () {
    return gulp.src('src/css/main.scss')
        .pipe(sass({ style: 'expanded', compass: true}))        
        .on('error', handleErrors)
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'ios 6', 'android 4'))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({stream: true}));
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






/* ---------- */
/* PROD TASKS */
/* ---------- */

// run all prod tasks to deploy
gulp.task('prod', function() {
	runSequence(
		'prod-clean',
		'prod-html',
	 	'prod-css',
		'prod-js',
		'prod-smoosh',
		'prod-media'
	);
});

//clear all prod folders and tmp dir
gulp.task('prod-clean', function(cb) {
	del(['.tmp/**', 'prod/**'], cb);
});

//move media files to prod folder
gulp.task('prod-media', function(cb) {
	return gulp.src('src/media/**/*')
		.pipe(gulp.dest('prod/media'));
});

//combine all html parts
gulp.task('prod-html', function() {
	return gulp.src('src/index.html')
		.pipe(gulp.dest('.tmp'));
});

//compile all sass and autoprefix and minify
gulp.task('prod-css', function() {
	return gulp.src('src/css/main.scss')
		.pipe(sass({ style: 'expanded', compass: true }))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(minifycss())
		.pipe(gulp.dest('.tmp/css'));
});

//jshint and uglify js files
gulp.task('prod-js', function() {
	return gulp.src('src/js/*.js')
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('default'))
		.pipe(uglify())
		.pipe(gulp.dest('.tmp/js'));
});

//smoosh all the files! (insert code for references/links to resources)
gulp.task('prod-smoosh', function() {
    gulp.src('.tmp/*.html')
        .pipe(smoosher())
        .pipe(gulp.dest('prod'));
});