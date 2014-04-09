var gulp     = require('gulp'),
    nodeunit = require('gulp-nodeunit');

gulp.task('tests', function() {
  gulp.src('tests/unit/**/*.js').pipe(nodeunit({
    reporter: 'default'
  }));
});
