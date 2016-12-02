var gulp          = require('gulp'),
    plumber       = require('gulp-plumber'),
    sass          = require('gulp-sass'),
    sourcemaps    = require('gulp-sourcemaps'),
    autoprefixer  = require('gulp-autoprefixer'),
    pug           = require('gulp-pug'),
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

/* Scripts */
gulp.task('scripts', function() {
    gulp.src('src/scripts/uglify/**/*.js')
        .pipe(sourcemaps.init())
        // .pipe(uglify())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(livereload());
});

// While developing, run 'gulp watch'
gulp.task('watch',function() {
    livereload.listen();

    gulp.watch('src/styles/**/*.sass',['styles']);
    gulp.watch('src/templates/**/*.pug',['templates']);
    gulp.watch('src/scripts/**/*.js',['scripts']);
});

// Run 'gulp' to build everything at once
gulp.task('default', ['styles', 'templates', 'scripts']);
