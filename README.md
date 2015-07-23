# gulp-cssshrink [![Build Status](https://travis-ci.org/torrottum/gulp-cssshrink.svg)](https://travis-ci.org/torrottum/gulp-cssshrink) [![Dependency Status](https://david-dm.org/torrottum/gulp-cssshrink.svg)](https://david-dm.org/torrottum/gulp-cssshrink) [![devDependency Status](https://david-dm.org/torrottum/gulp-cssshrink/dev-status.svg)](https://david-dm.org/torrottum/gulp-cssshrink#info=devDependencies)

Shrinks CSS files using [cssshrink](http://cssshrink.com/)

## Install
`npm install gulp-cssshrink --save-dev`

## Usage
```js
var gulp = require('gulp');
var cssshrink = require('gulp-cssshrink');

gulp.task('default', function() {
    gulp.src('css/**/*.css')
        .pipe(cssshrink())
        .pipe(gulp.dest('dist/css/'));
});

```
