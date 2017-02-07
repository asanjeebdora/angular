module.exports =function (grunt) {

  grunt.initConfig({
  concat: {
    js: {
      src: ['js/*.js'],
      dest: 'build/main.js',
    },
    css: {
      src: ['css/*.css'],
      dest: 'build/style.css',
    },
  },
  connect: {
      options: {
          port: 8012,
          livereload: 1234,
          // Change this to '0.0.0.0' to access the server from outside
          hostname: 'localhost'
      },
      livereload: {
          options: {
              open: true,
              base: [
                  'build'
              ]
          }
      },
      dist: {
          options: {
              open: true,
              base: '',
              livereload: false
          }
      }
  },
  watch: {
  js: {
    files: ['js/**/*.js'],
    tasks: ['concat']
  },
  css: {
    files: ['css/**/*.css'],
    tasks: ['concat']
  },
},
});

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default' , ['concat','watch','connect']);
}
