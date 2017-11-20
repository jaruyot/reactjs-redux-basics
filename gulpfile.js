var gulp = require('gulp');
gulp.task('default', function() {
    gulp.src(['src/index.html']).pipe(gulp.dest('dist'));
})