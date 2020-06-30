let autoprefixer  = require('gulp-autoprefixer');
let concat        = require('gulp-concat');
let gulp          = require('gulp');
let plumber       = require('gulp-plumber');
let pug           = require('gulp-pug');
let sass          = require('gulp-sass');
let sourcemaps    = require('gulp-sourcemaps');
let uglify        = require('gulp-uglify-es').default;


/* CSS */
gulp.task('styles', function(done) {
    gulp.src('src/styles/**/*.sass')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'}
            ))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/assets/css'));
    done();
});


/* Templates - pug */
gulp.task('templates', function(done) {
    gulp.src('src/templates/**/*.pug')
        .pipe(plumber())
        .pipe(pug({
            pretty: false
        }))
        .pipe(gulp.dest('dist'));
    done();
});


/** Scripts
  * tutti.min.js is where we concatenate all our js into
  * Individual, already minified vendor scripts go in
  * src/scripts/vendor/ and are copied "as is" to /dist/assets/js/
*/
gulp.task('scripts_tutti', function(done) {
    gulp.src('src/scripts/tutti/**/*.js')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat("tutti.min.js"))
        .pipe(uglify())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('dist/assets/js/generated'));
    done();
});


gulp.task('scripts_vendor', function(done) {
    gulp.src('src/scripts/vendor/**/*.js')
        .pipe(plumber())
        .pipe(gulp.dest('dist/assets/js'));
    done();
});


// While developing, run 'gulp watch'
gulp.task('watch', function(done) {
    gulp.watch('src/styles/**/*.sass',['styles']);
    gulp.watch('src/templates/**/*.pug',['templates']);
    gulp.watch('src/scripts/**/*.js',['scripts_tutti', 'scripts_vendor']);

    done();
});

let tasks = [];

// Run 'gulp' to build everything at once
gulp.task('default', gulp.parallel(tasks.concat(['styles', 'templates', 'scripts_tutti', 'scripts_vendor'])));
