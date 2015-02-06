var gulp = require('gulp'),
	browserify = require('browserify'),
	connect = require('gulp-connect'),
	uglify = require('gulp-uglify'),
	clean = require('gulp-clean'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer');


gulp.task('browserify', ['clean'], function () {
	browserify('./src/js/app.js')
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest('./dist/'));
});

gulp.task('connect', function() {
	connect.server();
});

gulp.task('clean', function() {
	gulp.src('./dist/*')
		.pipe(clean({force: true}));
});

// Rerun tasks whenever a file changes.
gulp.task('watch', function() {
	gulp.watch('./src/js/*.js', ['browserify']);
});
 
gulp.task('default', ['watch', 'browserify', 'connect']);