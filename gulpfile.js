var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('reload', function(done){
    browserSync.reload();
    done();
});

gulp.task('serve', function(){
  browserSync.init({
    server: {
        baseDir: "./app/"
    }
  });

   gulp.watch('./app/**.*', ['reload']);
});

gulp.task('default',['serve']);