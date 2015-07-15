var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('extjs', function(){
   gulp.src('src/Scripts/GridExt.js')
       .pipe(browserify({transform: 'reactify'}))
       .pipe(concat('GridExt.js'))
       .pipe(uglify())
       .pipe(gulp.dest('dist/Scripts'));
});

gulp.task('devExpress', function(){
    gulp.src('src/Scripts/GridDevExpress.js')
        .pipe(browserify({transform: 'reactify'}))
        .pipe(concat('GridDevExpress.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/Scripts'));
});

gulp.task('copy', function(){
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/indexDevExpress.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/Scripts/ExtJS/**/*.*')
        .pipe(gulp.dest('dist/Scripts/ExtJS/'));
    gulp.src('src/Scripts/DevExpress/**/*.*')
        .pipe(gulp.dest('dist/Scripts/DevExpress/'));
});

gulp.task('default',['extjs', 'devExpress', 'copy']);

gulp.task('watch', function(){
    gulp.watch('src/**/*.*',['default']);
});