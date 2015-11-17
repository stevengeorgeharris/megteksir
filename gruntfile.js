/*
  For more information, visit http://gruntjs.com/sample-gruntfile.
*/

module.exports = function(grunt) {

  grunt.initConfig({
      // Lets compress images
      imagemin: {
            png: {
              options: {
                // The higher the value, the more trials.
                optimizationLevel: 3,
              },
              files: [{
                expand: true,
                cwd: 'assets/images/', // Current working directory.
                src: ['*.png'], // Source files [*.png] targets all png files in cwd.
                dest: 'assets/images/comp/', // Destination directory.
                ext: '-comp.png', // Custom extension.
              }]
            },
            jpg: {
                options: {
                  // The higher the value, the more trials.
                  optimizationLevel: 3,
                },
                files: [{
                  expand: true,
                  cwd: 'assets/images/',
                  src: ['*.jpg'],
                  dest: 'assets/images/comp/',
                  ext: '-comp.jpg',
                }]
              }
      },
      // Register sass compiler.
      sass: {
        dist: {
          options: {
            // Add your own options here. See https://github.com/gruntjs/grunt-contrib-sass.
            style: 'expanded',
            sourcemap: 'none',
          },
          // Format = destination : source (You can add multiple files, seperate with a comma).
          files: {
            'css/main.css': 'sass/style.scss',
          }
        }
      },
      // Register watch task.
      watch: {
        // Watches all files ending .scss in sass/.
        files: ['sass/**/*.scss'],
        // If any target file changes, run these tasks.
        tasks: ['sass'],
      },
  });

  // Load any plugins used.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Register your tasks. You can also call each task directly i.e. grunt watch/grunt sass.
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('jpg', ['imagemin:jpg']);
  grunt.registerTask('png', ['imagemin:png']);
};
