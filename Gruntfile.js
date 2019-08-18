/* eslint-disable */
require('dotenv').config() 
const sass = require('node-sass');
module.exports = function (grunt) {
    grunt.initConfig({
        eslint: {
            options: {
              configFile: './.eslintrc.js',
              fix: true
            },
            target: ['Gruntfile.js', 'src/*.jsx'],
      },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'dist/main.css': 'src/scss/main.scss' // 'destination': 'source'
                }
            }
        },
        postcss: {
            options: {
                map: {
                    inline: false, 
                    annotation: 'dist/maps/' 
                },
                processors: [
                    require('pixrem')(), 
                    require('autoprefixer'), 
                ]
            },
            dist: {
                src: 'dist/main.css'
            }
        },
        browserify: {
            options: {
                browserifyOptions: {
                   debug: true
                },
                
             },
            dist: {
                files: {
                    'dist/main.js': ['src/index.jsx'],
                },
                options: {
                    transform: [
                        ['babelify', {
                            presets: ["@babel/preset-env", "@babel/preset-react"] 
                        }]
                    ],
                }
            }
        },
        watch: {
            scss: {
                files: ['src/scss/*.scss'],
                tasks: ['sass'],
            },
            scripts: {
                files: ['<%= eslint.target %>'],
                tasks: ['eslint', 'browserify'],
            }
        },
});

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('build', ['eslint', 'browserify', 'sass', 'postcss']);
    grunt.registerTask('default', ['watch']);
};
