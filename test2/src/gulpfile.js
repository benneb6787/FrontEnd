var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('js', function() {

    return gulp.src(src)
            .pipe(uglify())
            .pipe(gulp.dest('all.js'))
});
