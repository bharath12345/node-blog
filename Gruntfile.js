/**
 * Created with JetBrains WebStorm.
 * User: bharadwaj
 * Date: 02/09/13
 * Time: 2:08 PM
 * To change this template use File | Settings | File Templates.
 */

module.exports = function(grunt) {

    grunt.initConfig({
        clean : {
            htmlmins: {
                src: ["!views/includes/html/*.max.html"]
            },
            common: {
                src: [ "public/lib/my/*.min.js", "public/lib/my/*.min.css"]
            },
            topograph: {
                src: [ "public/lib/my/topograph/*.min.js", "public/lib/my/topograph/*.min.css"]
            }
        },
        uglify: {
            common: {
                files: {
                    'public/lib/my/common.min.js': 'public/lib/my/common.js'
                }
            },
            topograph: {
                files: {
                    'public/lib/my/topograph/initialize.min.js': 'public/lib/my/topograph/initialize.js',
                    'public/lib/my/topograph/d3AppGraph.min.js': 'public/lib/my/topograph/d3AppGraph.js',
                    'public/lib/my/topograph/jsPlumbAppGraph.min.js': 'public/lib/my/topograph/jsPlumbAppGraph.js'
                }
            }
        },
        cssmin: {
            common: {
                expand: true,
                cwd: 'public/lib/my/',
                src: ['*.css', '!*.min.css'],
                dest: 'public/lib/my/',
                ext: '.min.css'
            },
            topograph: {
                expand: true,
                cwd: 'public/lib/my/topograph/',
                src: ['*.css', '!*.min.css'],
                dest: 'public/lib/my/topograph/',
                ext: '.min.css'
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true
                },
                files: {
                    'views/includes/html/about.html'          : 'views/includes/html/about.max.html',
                    'views/includes/html/analytics.html'      : 'views/includes/html/analytics.max.html',
                    'views/includes/html/css.html'            : 'views/includes/html/css.max.html',
                    'views/includes/html/disqus.html'         : 'views/includes/html/disqus.max.html',
                    'views/includes/html/facebook.html'       : 'views/includes/html/facebook.max.html',
                    'views/includes/html/fb-sdk.html'         : 'views/includes/html/fb-sdk.max.html',
                    'views/includes/html/footer.html'         : 'views/includes/html/footer.max.html',
                    'views/includes/html/google-analytics.html': 'views/includes/html/google-analytics.max.html',
                    'views/includes/html/javascripts.html'    : 'views/includes/html/javascripts.max.html',
                    'views/includes/html/meta.html'           : 'views/includes/html/meta.max.html',
                    'views/includes/html/postpagescripts.html': 'views/includes/html/postpagescripts.max.html',
                    'views/includes/html/topmost-nav.html'    : 'views/includes/html/topmost-nav.max.html',
                    'views/includes/html/twitter.html'        : 'views/includes/html/twitter.max.html'
                }
            }
        },
        jsdoc : {
            dist : {
                src: [
                    'public/lib/my/common.js',
                    'public/lib/my/topograph/initialize.js',
                    'public/lib/my/topograph/d3AppGraph.js',
                    'public/lib/my/topograph/jsPlumbAppGraph.js'
                ],
                options: {
                    destination: 'public/docs'
                }
            }
        },
        exec: {
            serve: {
                cmd: 'node app.js'
            }
        }
    });

    /*
     loadNpmTasks
     */
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-jsdoc');

    /*
     registerTask
     */
    grunt.registerTask('default', [ 'clean', 'uglify', 'cssmin', 'htmlmin','jsdoc', 'exec:serve' ]);


};