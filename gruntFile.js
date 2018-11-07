module.exports = function(grunt){

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('serve', ['shell']);
    grunt.registerTask('build', ['browserify', 'watch']);
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            main: {
                src: 'js/bundle.js',
                dest: 'js/main.js'
            }
        },
        watch: {
            files: [
                'css/*.*',
                'js/*.*',
                'node_modules/*.*',
                'node_modules/kinaxis/*.*',
                'json/*.*'
            ],
            tasks: ['build']
        },
        shell: {
            runserver:{
                command: 'node js/index.js --force'
            }
        }     
    });

};