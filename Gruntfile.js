module.exports = function(grunt) {

    grunt.initConfig({
        express: {
            dev: {
                options: {
                    script: 'bin/www.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-express-server');
}