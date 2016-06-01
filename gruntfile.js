module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            files: ["app/**/*.js"], // the watched files
            target: ['file.js']
        },
        ts: {
            options: {
                reporter: require('jshint-stylish')
            },
            build: {
                src: ["app/server.ts", "!node_modules/**/*.ts", "app/**/*.ts"],
                dest: 'build',

                // Avoid compiling TypeScript files in node_modules
                options: {
                    target: "es6",
                    module: 'commonjs',
                    // To compile TypeScript using external modules like NodeJS
                    fast: 'never'
                    // You'll need to recompile all the files each time for NodeJS
                }
            }
        },
        watch: {
            scripts: {
                files: ['app/server.ts', 'gulpfile.ts', '!node_modules/**/*.ts', "app/**/*.ts"], // the watched files
                tasks: ["tslint:all", "ts:build"], // the task to run
                options: {
                    spawn: false // makes the watch task faster
                }
            }
        },
        tslint: {
            options: {
                configuration: grunt.file.readJSON("tslint.json")
            },
            all: {
                src: ["app/server.ts", "!node_modules/**/*.ts", "!obj/**/*.ts", "!typings/**/*.ts", "app/**/*.ts"]
                // avoid linting typings files and node_modules files
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'build/app/**/*.js',
                dest: 'bin/bundle.min.js'
            }
        }
    });

    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default tasks.
    grunt.registerTask('default', ["ts:build"]);
    grunt.registerTask('default', ["tslint:all", "ts:build"]);
    grunt.registerTask('default', ["ts:build", 'uglify']);
    grunt.registerTask('default', ['jshint']);

};
