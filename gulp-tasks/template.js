var gulp = require('gulp');
var handlebars = require('gulp-static-handlebars');
var browserSync = require('browser-sync');
var rename = require('gulp-rename');
var gcallback = require('gulp-callback');
var fs = require('fs');

var srcCopy = 'src/data/copy.json';
var srcIndex = 'src/html/index.hbs';

gulp.task('template-dev', function(cb) {

	filesExist(function(err) {
		if(err) {
			console.log(err);
			cb();
		} else {
			var data = fs.readFileSync(srcCopy, {encoding: 'utf8'});
			data = JSON.parse(data);

			gulp.src(srcIndex)
			.pipe(handlebars(data, {
				partials: gulp.src('src/partials/*.hbs')
			}))
			.pipe(rename('index.html'))
			.pipe(gulp.dest('src/html'))
			.pipe(gcallback(function() {
    			cb();
			}));
		}
	});
});

gulp.task('template-prod', function(cb) {

	filesExist(function(err) {
		if(err) {
			console.log(err);
			cb();
		} else {
			var data = fs.readFileSync(srcCopy, {encoding: 'utf8'});
			data = JSON.parse(data);

			gulp.src(srcIndex)
			.pipe(handlebars(data, {
				partials: gulp.src('src/partials/*.hbs')
			}))
			.pipe(rename('index.html'))
			.pipe(gulp.dest('src/html'))
			.pipe(gcallback(function() {
    			cb();
			}));
		}
	});
});

var filesExist = function(cb) {
	fs.stat(srcCopy, function(err, file) {
		if(!err) {
			fs.stat(srcIndex, function(err, file) {
				cb();
			});
		} else {
			cb('*** No data file exists: src/data/copy.json ***');
		}
	});
};