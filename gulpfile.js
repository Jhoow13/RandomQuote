var gulp = require('gulp');
var clean = require('gulp-clean');
var browserSync = require('browser-sync').create();
var buildFiles = ['./app/index.html', './app/style.css','./app/scripts.js'];



gulp.task('reload', function(done){
    browserSync.reload();
    done();
});

gulp.task('build', function(){
  gulp.src(buildFiles)
    .pipe(gulp.dest('./'));
})

gulp.task('serve', function(){
  browserSync.init({
    server: {
        baseDir: "./app/"
    }
  });

   gulp.watch('./app/**.*', ['reload']);
});

gulp.task('default',['serve']);