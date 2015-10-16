/*
 * grunt-jimmify
 * https://github.com/adierkens/grunt-jimmify
 *
 * Copyright (c) 2015 Adam Dierkens
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var request = require('request');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('jimmify', 'The best Grunt plugin ever.', function() {
    
    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
        protocol: 'http',
        server: 'localhost',
        port: 3000,
        email: 'adam@dierkens.com'
    });

    var requestCount = 0;

    // Count the total number of requests first
    this.files.forEach(function(f) {
        f.src.forEach(function(path) {
            requestCount += 1;
        });
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      f.src.forEach(function(filepath) {
          var filecontent = grunt.file.read(filepath);
          var destDir = f.dest;
          
          if (destDir.constructor === Array) {
              destDir = destDir[0];
          }

          var destFile = path.join(destDir, path.basename(filepath));
          
          request({
            url: options.protocol + '://' + options.server + ':' + options.port,
            method: 'POST',
            timeout: 1000 * 60 * 60 * 24,
            headers: {
                "Content-Type": "application/json"
            },
            json: { email: options.email, src: filecontent }
          }, function(error, response, body) {
            
              if (error) {
                  grunt.log.errorlns(error);
              } else {
                  grunt.file.write(destFile, body);
              }

              requestCount -= 1;

              if (requestCount === 0) {
                done(true);
              }
          });
      });
    });
  });
};
