var gulp = require('gulp');
var handlebars = require('gulp-static-handlebars');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var fs = require('fs');

gulp.task('dev-copy', function() {

	fs.fstat('src/data/copy.json', function(e, d) {
		console.log(e, d);
	});

	// var data = fs.readFileSync('src/data/copy.json', {encoding: 'utf8'});
	// data = JSON.parse(data);

	// gulp.src('src/index.hbs')
	// .pipe(handlebars(data, {
	// 	partials: gulp.src('src/partials/*.hbs')
	// }))
	// .pipe(rename('index.html'))
	// .pipe(gulp.dest('src/'))
	// .pipe(browserSync.reload({stream:true}));
});