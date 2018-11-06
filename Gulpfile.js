const gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename'),
  svgmin = require('gulp-svgmin'),
  svgstore = require('gulp-svgstore'),
  inject = require('gulp-inject'),
  path = require('path'),
  inputIcons = [];

let basePathWww = 'src/';

inputIcons.push(basePathWww + 'icons-source/*.svg');

gulp.task('svgmin', function () {
  var svgs = gulp.src(inputIcons)
    .pipe(plumber())
    .pipe(svgmin(function (file) {
      var prefix = path.basename(file.relative, path.extname(file.relative));
      return {
        plugins: [{
          cleanupIDs: {
            prefix: prefix + '-',
            minify: true
          }
        }]
      }
    }))
    .pipe(rename(function (path) {
      path.dirname = path.dirname.replace("icons-source", "assets");
    }))
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(gulp.dest(basePathWww));

    svgs.on('data', function (chunk) {
    var contents = chunk.contents.toString().trim();
    var bufLength = process.stdout.columns;
    var hr = '\n\n' + Array(bufLength).join("_") + '\n\n'
    if (contents.length > 1) {
      process.stdout.write(chunk.path + '\n' + contents + '\n');
      process.stdout.write(chunk.path + hr);
    }
  });

  function fileContents(filePath, file) {
    return file.contents.toString();
  }

  return gulp
    .src('src/app/custom-icon/custom-icon.component.html')
    .pipe(inject(svgs, { transform: fileContents }))
    .pipe(gulp.dest('src/app/custom-icon'));
});

gulp.task('default', ['serve', 'imagemin', 'svgmin']);
