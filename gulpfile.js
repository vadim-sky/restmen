/**
 * Created by user on 27/04/2016.
 */
gulp.task('default', () =>
    gulp.src(['file.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish', {beep: true}))
);