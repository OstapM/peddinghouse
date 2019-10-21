/* plugins */
var browsersync = require('browser-sync'),
    // axe = require('gulp-axe-webdriver'),
    cache = require('gulp-cache'),
    changed = require('gulp-changed'),
    cheerio = require('gulp-cheerio'),
    cleanCSS = require('gulp-clean-css'),
    clone = require('gulp-clone'),
    concat = require('gulp-concat'),
    del = require('del'),
    gulp = require('gulp'),
    gulpFilter = require('gulp-filter'),
    gulpIf = require('gulp-if'),
    imagemin = require('gulp-imagemin'),
    merge = require('merge-stream'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    svgSymbols = require('gulp-svg-symbols'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    webp = require('gulp-webp'),
    zip = require('gulp-zip'),
    order = require("gulp-order");

/* paths */

var paths = {
    src: 'src/',
    dist: 'dist/'
};

var inputs = {
    js: paths.src + 'js',
    css: paths.src + 'css',
    scss: paths.src + 'scss',
    img: paths.src + 'img',
    css_img_path: '../img'
};

var outputs = {
    js: paths.dist + 'js',
    css: paths.dist + 'css',
    scss: paths.dist + 'scss',
    img: paths.dist + 'img',
    css_img_path: '../img'
};

// url of your project
var urlSync = 'peddinghouse.local';

/*
 * Tasks
 * 1/ compass
 * 2/ scripts
 * 3/ images
 * 4/ sprites
 * 5/ extend
 * 6/ styleguide
 * 7/ zip
 * 8/ watch
 * 9/ accessibility check
 * 
 */

/* remove print css from concatenation + Concatenate & Minify CSS */
gulp.task('sass', function () {
    var filterPrint = gulpFilter(['*', '!print.scss']);

    var all = gulp.src([inputs.scss + '/style.scss',
    inputs.scss + '/**/*.scss',
    inputs.scss + '/*.scss'])
        .pipe(plumber())
        .pipe(filterPrint)
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(outputs.css))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(outputs.css))
        .pipe(browsersync.reload({ stream: true }))
        .pipe(notify({ message: 'styles.min.css generated', onLast: true }));
});

/* Concatenate & Minify JS */
gulp.task('scripts', function () {
    return gulp.src([
        inputs.js + '/*.js'
        ])
        //manage order
        .pipe(order([
            'global.js',
        ]))
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(outputs.js))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest(outputs.js))
        .pipe(browsersync.reload({ stream: true }))
        .pipe(notify({ message: 'Scripts task complete', onLast: true }));
});

/* browsersync */
// gulp.task('browser-sync', function () {
//     browsersync.init({
//         proxy: urlSync, 
//         port: 3000
//     });
// });

// gulp.task('browsersync-reload', function () {
//     browsersync.reload();
// });


// Watch Files For Changes
// gulp.task('watch', ['browser-sync'], function (testCB) {
gulp.task('watch', function (testCB) {
    gulp.watch(inputs.scss + '/**/*.scss', ['sass']);
});

gulp.task('build-css-js', ['sass', 'scripts' ]);

/* accessibility task */
// gulp.task('axe', function (done) {
//     var options = {
//         saveOutputIn: 'a11yResult.json',
//         browser: 'phantomjs',
//         urls: ['*.html']
//     };
//     return axe(options, done);
// });

// Default Task
gulp.task('default', ['watch']);