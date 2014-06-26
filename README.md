# gulp-cssshrink

Shrinks CSS files using [cssshrink](http://cssshrink.com/)

## Install
`npm install gulp-cssshrink --save-dev`

## Usage
```js
var gulp = require('gulp');
var cssshrink = require('gulp-cssshrink');

gulp.task('default', function() {
    gulp.src('css/**/.css')
        .pipe(cssshrink())
        .pipe(gulp.dest('dist/css/'));
});

```
