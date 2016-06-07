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
                    module: 'commonjs',
                    target: 'es5',
                    sourceMap: true,
                    declaration: false,
                    experimentalDecorators: true,
                    watch: true
                }
            },
            test: {
                src: ['app/**/tests/*.ts'],
                dest: 'tests',
                options: {
                    module: 'commonjs', //or
                    target: 'es5', //or es3
                    sourceMap: true,
                    declaration: false,
                    experimentalDecorators: true
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
        },
        'node_mocha': {
            test: {
                src: ['tests/**/tests/*.js'],
                options: {
                    mochaOptions: {
                        globals: ['expect'],
                        timeout: 3000,
                        ignoreLeaks: false,
                        ui: 'bdd',
                        reporter: 'landing'
                    }
                }
            },
            coverage: {
                src: ['tests/**/test/*.js'],
                options: {
                    mochaOptions: {
                        globals: ['expect'],
                        timeout: 3000,
                        ignoreLeaks: false,
                        ui: 'bdd',
                        reporter: 'spec'
                    },
                    reportFormats: ['html'], // other grunt-mocha-istanbul can be added here
                    runCoverage: true // Run the unit test and generate coverage test
                }
            }
        },
        'http-server': {
            'coverage': {
                root: 'coverage'
            }
        },
        shell: {
            debug: {
                command: 'node-debug js/rest/rest-crud.js'
            }
        },
        nodemon: {
            dev: {
                script: 'js/rest/rest-crud.js'
            }
        },
        tsd: {
            refresh: {
                options: {
                    command: 'reinstall',
                    latest: true,
                    config: 'tsd.json'
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');


    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-node-mocha');
    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-tsd');

    // Default tasks.
    grunt.registerTask('default', ["ts:build"]);
    grunt.registerTask('default', ["tslint:all", "ts:build"]);
    grunt.registerTask('default', ["ts:build", 'uglify']);
    grunt.registerTask('default', ['jshint']);


    grunt.registerTask('test', ['ts:test', 'node_mocha:test']);
    grunt.registerTask('coverage', ['ts:test', 'node_mocha:coverage', 'http-server:coverage']);
    grunt.registerTask('run', ['nodemon']);
    // Must have installed node-inspector globally 'sudo npm install -g node-inspector'
    grunt.registerTask('debug', ['shell:debug']);
};
