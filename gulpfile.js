/*jslint node: true */
var gulp      = require('gulp');
var plugins   = require('gulp-load-plugins')();

// External Modules
var browserify   = require('browserify');
var buffer       = require('vinyl-buffer');
var source       = require('vinyl-source-stream');

// Override gulp.src method
var gulp_src = gulp.src;
gulp.src = function() {
  return gulp_src.apply(gulp, arguments)
    .pipe(plugins.plumber(function(error) {
      // Output an error message
      plugins.util.log(plugins.util.colors.red('Error (' + error.plugin + '): ' + error.message));
      // emit the end event, to properly end the task
      this.emit('end');
    })
  );
};

// Build Applet
gulp.task('js', function() {
  var bundler = browserify({
    entries: ['./src/index.js'],
    debug:   true
  });

  var bundle = function() {
    return bundler
      .bundle()
      .pipe(source('global.js'))
      .pipe(buffer())
      .pipe(plugins.uglify({compress: {hoist_funs: false, hoist_vars: false}}))
      .pipe(plugins.rename({suffix: '.min'}))
      .pipe(gulp.dest('./build'))
  };

  return bundle();
});
