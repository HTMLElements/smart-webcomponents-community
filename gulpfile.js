// include plug-ins
var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

var orderedFilePaths = [
    'source/jqxbutton.js',
    'source/jqxcheckbox.js',
    'source/jqxled.js',
    'source/jqxpowerbutton.js',
    'source/jqxradiobutton.js',
    'source/jqxswitchbutton.js',
    'source/jqxdropdownlist.js',
    'source/jqxmultisplitbutton.js',
    'source/jqxcombobox.js',
    'source/jqxtextbox.js',
    'source/jqxmaskedtextbox.js',
    'source/jqxmultilinetextbox.js',
    'source/jqxpasswordtextbox.js',
    'source/jqxmenu.js',
    'source/jqxlistmenu.js',
    'source/jqxtank.js',
    'source/jqxgauge.js',
    'source/jqxslider.js',
    'source/jqxaccordion.js',
    'source/jqxalert.js',
    'source/jqxarray.js',
    'source/jqxcalendar.js',
    'source/jqxdatetimepicker.js',
    'source/jqxlistbox.js',
    'source/jqxnumerictextbox.js',
    'source/jqxpager.js',
    'source/jqxprogressbar.js',
    'source/jqxscrollbar.js',
    'source/jqxtabs.js',
    'source/jqxtimepicker.js',
    'source/jqxtooltip.js',
    'source/jqxwindow.js',
    'source/jqxdate.js',
    'source/jqxdraw.js',
    'source/jqxmath.js',
    'source/jqxnumeric.js',
    'source/jqxtickintervalhandler.js'
];

gulp.task('processCSS', function () {

    return gulp.src(['source/styles/jqx.base.css'])
        .pipe(postcss([cssnext()]))
        .pipe(gulp.dest('source-es5/styles'))
        .pipe(gulp.dest('source-minified/styles'));
});

gulp.task('concat', ['processCSS'], function () {

    return gulp.src(orderedFilePaths)
        .pipe(concat('jqxelements.js'))
        .pipe(gulp.dest('source'));
});

gulp.task('babel', ['concat'], function () {

    return gulp.src(['source/*.js'])
        .pipe(babel({
            presets: ['es2015'],
            plugins: ["external-helpers-2"]
        }))
        .pipe(gulp.dest('source-es5'));
});

gulp.task('uglify', ['babel'], function () {

    return gulp.src(['source-es5/*.js'])
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest('source-minified'));
});

//Set a default tasks
gulp.task('default', ['uglify'], function () { });
