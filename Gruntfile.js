module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            hint: ['app/*.js', 'app/database/**/*.js', 'app/edit/**/*.js', 'app/home/**/*.js', 'app/test/**/*.js', 'app/view/**/*.js'],
            options: {
                jshintrc: '.jshintrc',
            },
        },
        watch: {
            jsWatcher: {
                files: ['app/**/*.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false
                }
            },
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'watch']);

};