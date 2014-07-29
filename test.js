var assert = require('assert');
var es = require('event-stream');
var gutil = require('gulp-util');
var cssshrink = require('./index.js');
var File = require('vinyl');

describe('gulp-cssshrink', function() {
  describe('in buffer mode', function() {
    it('should cssshrink the css', function(done) {

      var fakeFile = new File({
        contents: new Buffer('@media print {a {color: #ff0000}} @media print {a {color: #f00;}}')
      });

      var myCSSShrink = cssshrink();
      myCSSShrink.write(fakeFile);

      myCSSShrink.once('data', function(file) {
        assert(file.isBuffer());

        // check if the CSS was shrunken
        assert.equal(file.contents.toString(), '@media print{a{color:red}}');
      });


      done();
    });
  });

  describe('with empty file', function() {
    it('should not return anything or crash', function(done) {

      var fakeFile = new File({
        contents: new Buffer('')
      });

      var myCSSShrink = cssshrink();
      myCSSShrink.write(fakeFile);

      myCSSShrink.once('data', function(file) {
        assert(file.isBuffer());

        // check if the CSS was shrunken
        assert.equal(file.contents.toString(), '');
      });


      done();
    });
  });
});
