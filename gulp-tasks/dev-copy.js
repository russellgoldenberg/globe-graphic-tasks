var gulp = require('gulp');
var handlebars = require('gulp-static-handlebars');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var fs = require('fs');

gulp.task('dev-copy', function() {

	filesExist(function(err) {
		if(err) {
			console.log(err);
		} else {
			var data = fs.readFileSync('src/data/copy.json', {encoding: 'utf8'});
			data = JSON.parse(data);

			gulp.src('src/index.hbs')
			.pipe(handlebars(data, {
				partials: gulp.src('src/partials/*.hbs')
			}))
			.pipe(rename('index.html'))
			.pipe(gulp.dest('src/'))
			.pipe(browserSync.reload({stream:true}));
		}
	});
});

var filesExist = function(cb) {
	fs.stat('src/data/copy.json', function(err, file) {
		if(!err) {
			fs.stat('src/index.hbs', function(err, file) {
				if(!err) {
					cb();
				} else {
					cb('*** You must have a template: src/index.hbs ***');
				}
			});
		} else {
			cb('*** No data file exists: src/data/copy.json ***');
		}
	});
};