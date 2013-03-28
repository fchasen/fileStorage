module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
	  pkg: '<json:package.json>',
	  meta: {
		banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
		  '<%= grunt.template.today("yyyy-mm-dd") %> */' +
		  'var fileStorage = fileStorage || {};'
	  },
	  min: {
		'dist/workers/loader_filesystem.js': ['<banner>', 'src/workers/loader_filesystem.js'],
		'dist/fileStorage.min.js': ['<banner>', 'src/*.js']
	  }
	});
	
	
	
	// Default task(s).
	grunt.registerTask('default', ['min']);
	
};

