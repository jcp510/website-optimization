module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    responsive_images: {
      dev: {
        options: {
          // Task-specific options go here.
          engine: 'im'
        },
        files: [{
          // Target-specific file lists and/or options go here.
          expand: true,
          src: ['*.{png,jpg}'],
          cwd: 'src_images/',
          dest: 'images'
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-responsive-images');
  // Default task(s).
  grunt.registerTask('default', ['responsive_images']);
};
