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
        port: 9000,
        livereload: 35729,
        hostname: 'localhost'
    },
    livereload: {
        options: {
            open: {
                 target: 'http://localhost:9000/index.html'
            },
            base: [
                'build'
            ]
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
  grunt.registerTask('default' , ['concat','connect','watch']);
}
