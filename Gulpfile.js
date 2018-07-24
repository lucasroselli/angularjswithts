let gulp = require('gulp'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

    var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
    
const vendors = ['angular', 'jquery'];

gulp.task("build:type", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest(tsProject.config.compilerOptions.outDir));
});


gulp.task('build:vendor', () => {
    const b = browserify({
        debug: false
    });
    vendors.forEach(lib => {
        b.require(lib);
    });
    b.bundle()
        .pipe(source('vendor.js'))
        .pipe(gulp.dest('./app/js/'));
});

gulp.task('build:app', function() {
    return browserify('./build/app.js')
        .external(vendors)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./app/js/'))
        .pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        root: './app',
        livereload: true
    });
});

gulp.task('html', function() {
    gulp.src('./app/index.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(['./app/index.html'], ['html']);
    gulp.watch(['./build/**/*.js'], ['build:app']);
    gulp.watch(['./source/**/*.ts'], ['build:type']);
});

gulp.task('default', ['build:vendor', 'build:app','build:type', 'connect', 'watch']);