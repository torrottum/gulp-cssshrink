var through = require('through2');
var gutil = require('gulp-util');
var cssshrink = require('cssshrink');
var PluginError = gutil.PluginError;

// Consts
const PLUGIN_NAME = 'gulp-cssshrink';

function cssShrinkIt(css) {
  css = cssshrink.shrink(css);
  return new Buffer(css);
}

// Plugin level function(dealing with files)
function cssShrink() {

  // Creating a stream through which each file will pass
  var stream = through.obj(function(file, enc, callback) {
    if (file.isStream()) {
      this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
      return callback();
    }

    if (file.isBuffer()) {
        if (file.contents.toString().trim() !== '') {
          file.contents = cssShrinkIt(file.contents.toString());
        }
    }

    // make sure the file goes through the next gulp plugin
    this.push(file);
    // tell the stream engine that we are done with this file
    callback();
  });

  // returning the file stream
  return stream;
};

// Exporting the plugin main function
module.exports = cssShrink;
