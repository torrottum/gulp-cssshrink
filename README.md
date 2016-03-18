# gulp-cssshrink [![Build Status](https://travis-ci.org/torrottum/gulp-cssshrink.svg)](https://travis-ci.org/torrottum/gulp-cssshrink) [![Dependency Status](https://david-dm.org/torrottum/gulp-cssshrink.svg)](https://david-dm.org/torrottum/gulp-cssshrink) [![devDependency Status](https://david-dm.org/torrottum/gulp-cssshrink/dev-status.svg)](https://david-dm.org/torrottum/gulp-cssshrink#info=devDependencies)

Shrinks CSS files using [cssshrink](http://cssshrink.com/)

**Note: It seems like cssshrink is dead (no commits since 2014-07-07 and 20 open issues). You should probably use something like [cssnano](http://cssnano.co/) instead**

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
