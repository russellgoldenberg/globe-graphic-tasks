var gulp = require('gulp');
var hb = require('gulp-hb');
var rename = require('gulp-rename');
var gcallback = require('gulp-callback');
var fs = require('fs');

var argv = require('minimist')(process.argv.slice(2));

var select = 'dining-out';
if(argv.select) {
	select = argv.select;
}

var srcCopy = 'src/data/copy.json';
var srcIndex = 'src/html/index.hbs';

gulp.task('html-dev', function(cb) {

	handlebarsExists(function(err) {
		if(err) {
			cb();
		} else {
			// if you need to select a subset of data based on command line arg
			// var data = fs.readFileSync(srcCopy, {encoding: 'utf8'});
			// data = JSON.parse(data);
			gulp.src(srcIndex)
			 .pipe(hb({
	            data: 'src/data/*.{json}',
	            helpers: 'src/html/helpers/*.js',
	            partials: 'src/html/partials/**/*.hbs',
	            debug: false
	        }))
			.pipe(rename('index.html'))
			.pipe(gulp.dest('src'))
			.pipe(gcallback(function() {
    			cb();
			}));
		}
	});
});

gulp.task('html-prod', function(cb) {

	handlebarsExists(function(err) {
		if(err) {
			gulp.src('src/index.html')
			.pipe(gulp.dest('.tmp'))
			.pipe(gcallback(function() {
    			cb();
			}));
		} else {

			gulp.src(srcIndex)
			 .pipe(hb({
	            data: 'src/data/*.{json}',
	            helpers: 'src/html/helpers/*.js',
	            partials: 'src/html/partials/**/*.hbs',
	            debug: false
	        }))
			.pipe(rename('index.html'))
			.pipe(gulp.dest('.tmp'))
			.pipe(gcallback(function() {
    			cb();
			}));
		}
	});
});

var handlebarsExists = function(cb) {
	fs.stat(srcIndex, function(err, file) {
		if(!err && file) {
			cb();
		} else {
			cb('No hbs file exists: src/html/index.hbs');
		}
	});
};