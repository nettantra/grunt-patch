/*
 * grunt-patch
 * https://github.com/nettantra/grunt-patch
 *
 * Copyright (c) 2014 NetTantra Technologies
 * Licensed under the MIT license.
 * https://github.com/nettantra/grunt-patch/blob/master/LICENSE-MIT
 */

module.exports = function(grunt) {
  'use strict';

  var jsdiff = require('diff');
  var fs = require('fs');

  grunt.registerMultiTask('patch', 'Grunt Plugin to patch files.', function() {
    var options = this.options({
      patch: false
    });
    
    var diffString = options.patch;
    
    if (!options.patch) {
      grunt.log.error('The option `patch` must either be a patch string or path to a patch file.');
      return false;
    }
    
    if (grunt.file.exists(options.patch)) {
      var patchFileStats = fs.statSync(options.patch);
      if (patchFileStats.isDirectory()) {
        grunt.log.error('The location `'+options.patch+'` is not a valid file.');
        return false;
      }
      diffString = grunt.file.read(options.patch);
    }
    
    this.files.forEach(function(f) {
      var srcCount = 0;
      var src = f.src.filter(function(filepath) {
        srcCount++;
        if (srcCount > 1) {
          grunt.log.warn('Only the first file in the source is accepted as input. Ignoring "'+filepath+'".');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        var fileContents = grunt.file.read(filepath);
        return jsdiff.applyPatch(fileContents, diffString);
      });
      
      if (!src || !src[0]) {
        grunt.fail.warn('Patch failed. Please check your patch and its corresponding version.');
        return false;
      }
      // Write the destination file.
      grunt.file.write(f.dest, src);
    
      // Print a success message.
      grunt.log.writeln('File "' + f.src + '" was patched successfully. Output file: "' + f.dest + '".');
    });
  });

};
