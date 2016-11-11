/*gulpfile.js*/

var gulp = require("gulp");
var clean = require('gulp-clean');
var plumber = require("gulp-plumber");
var sourcemaps = require("gulp-sourcemaps");
var uglify = require('gulp-uglify');
var minicss = require('gulp-minify-css');
var rename = require("gulp-rename");
var concat = require("gulp-concat");
var server = require('gulp-webserver');
var ejs = require('gulp-ejs');
var less = require('gulp-less');

var path = {
    src: {
        ejs: 'src/ejs',
        less: 'src/less',
        js: 'src/js',
        lib: 'src/lib'
    },
    mock: {
        html: 'mock',
        css: 'mock/css',
        js: 'mock/js',
        lib: 'mock/lib'
    },
    dist: {

    },
    pathData: {
        css: '/css',
        js: '/js',
        lib: '/lib'
    }
};

gulp.task('ejs', function () {
    return gulp.src([path.src.ejs + '/*.ejs'])
            .pipe(ejs({data: {path: path.pathData}}, {ext: '.html'}))
            .pipe(gulp.dest(path.mock.html));
});

gulp.task('less', function () {
    return gulp.src([path.src.less + '/*.less'])
            .pipe(less())
            .pipe(gulp.dest(path.mock.css));
});

gulp.task('js', function () {
    return gulp.src([path.src.js + '/*.js'])
            .pipe(gulp.dest(path.mock.js));
});

gulp.task('serve', function () {
    gulp.watch([path.src.ejs + '/*.ejs'],['ejs']);
    gulp.watch([path.src.less + '/*.less'],['less']);
    gulp.watch([path.src.js + '/*.js'],['js']);
    gulp.src('mock')
    .pipe(server({
      host: '0.0.0.0',
      port: 8008,
      livereload: true,
      open: true
    }));
});

gulp.task('default', function () {
    console.log('テスト');
});
