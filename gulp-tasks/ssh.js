var gulp = require('gulp');
var config = require('./ssh-config.js');
var gulpSSH = require('gulp-ssh')({
	ignoreErrors: false,
	sshConfig: {
		host: config.host,
		username: config.username,
		password: config.password
	}
});

var filepath = config.filepath;

gulp.task('upload', function(cb) {
	return gulp.src('prod/**/*')
		.pipe(gulpSSH.sftp('write', filepath));
});

// ssh-config.js should look like this:
// module.exports = {
// 	host: 'shell.boston.com',
// 	username: '',
// 	password: '',
// 	filepath: '/web/bgapps/html/graphics/[year]/[month]/[graphic]'
// };