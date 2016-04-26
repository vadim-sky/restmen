module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        ts: {
            build: {
                src: ["server.ts", 'gulpfile.ts', "!node_modules/**/*.ts"],
                dest: 'bundle',

                // Avoid compiling TypeScript files in node_modules
                options: {
                    module: 'commonjs',
                    // To compile TypeScript using external modules like NodeJS
                    fast: 'never'
                    // You'll need to recompile all the files each time for NodeJS
                }
            }
        },
        watch: {
            scripts: {
                files: ['server.ts', 'gulpfile.ts', '!node_modules/**/*.ts'], // the watched files
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
                src: ["server.ts", "!node_modules/**/*.ts", "!obj/**/*.ts", "!typings/**/*.ts"]
                // avoid linting typings files and node_modules files
            }
        }
    });

    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-contrib-watch");


    // Default tasks.
    grunt.registerTask('default', ["ts:build"]);
    grunt.registerTask('default', ["tslint:all", "ts:build"]);
};