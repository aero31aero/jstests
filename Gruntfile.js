var grunt = require('grunt');

grunt.loadNpmTasks('grunt-contrib-jshint');

grunt.initConfig({
  jshint: {
    all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
  }
});

grunt.registerTask('world', 'world task description', function(){
  console.log('hello world');
});

grunt.registerTask('hello', 'say hello', function(name){
  if(!name || !name.length)
    grunt.warn('you need to provide a name.');

  console.log('hello ' + name);
});

grunt.registerTask('default', ['world', 'hello:rohitt', 'jshint']);
