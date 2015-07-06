module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.initConfig({
		bower: grunt.file.readJSON('bower.json'),
		'sass': {
			dist: {
				files: {
					"scss/yeti.css": "scss/yeti.scss"
				}
			}
		},
		'clean': {
			css: ["scss/*.css", "scss/*.css.map", "!scss/*.scss"]
		}
	});

	grunt.registerTask('default', ['sass', 'clean']);
};
