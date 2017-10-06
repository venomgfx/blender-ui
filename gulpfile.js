var gulp          = require('gulp'),
    plumber       = require('gulp-plumber'),
    sass          = require('gulp-sass'),
    sourcemaps    = require('gulp-sourcemaps'),
    autoprefixer  = require('gulp-autoprefixer'),
    pug           = require('gulp-pug'),
    concat        = require('gulp-concat'),
    uglify        = require('gulp-uglify'),
    livereload    = require('gulp-livereload');

/* CSS */
gulp.task('styles', function() {
    gulp.src('src/styles/**/*.sass')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'}
            ))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(livereload());
});

/* Templates - pug */
gulp.task('templates', function() {
    gulp.src('src/templates/**/*.pug')
        .pipe(pug({
            pretty: false
        }))
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

/** Scripts
  * tutti.min.js is where we concatenate all our js into
  * Individual, already minified vendor scripts go in
  * src/scripts/vendor/ and are copied "as is" to /dist/assets/js/
*/
gulp.task('scripts_tutti', function() {
    gulp.src('src/scripts/tutti/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat("tutti.min.js"))
        .pipe(uglify())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(livereload());
});

gulp.task('scripts_vendor', function() {
    gulp.src('src/scripts/vendor/**/*.js')
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(livereload());
});

// While developing, run 'gulp watch'
gulp.task('watch',function() {
    livereload.listen();

    gulp.watch('src/styles/**/*.sass',['styles']);
    gulp.watch('src/templates/**/*.pug',['templates']);
    gulp.watch('src/scripts/**/*.js',['scripts_tutti', 'scripts_vendor']);
});

// Run 'gulp' to build everything at once
gulp.task('default', ['styles', 'templates', 'scripts_tutti', 'scripts_vendor']);
