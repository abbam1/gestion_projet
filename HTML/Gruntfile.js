const sass = require('node-sass');
module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js']
        },
        sass: {
            options: {
                includePaths: ["node_modules/bootstrap-sass/assets/stylesheets"],
                implementation: sass,
                  

            },
            dist: {
                options: {
                outputStyle: "compressed",
                },
                files: [
                    {
                        "dist/assets/css/my-task.style.min.css":             [ "scss/main.scss"],   
                    },
                ],
            },
        },
        uglify: {
            my_target: {
                files: {
                    "dist/assets/bundles/libscripts.bundle.js": [ "node_modules/jquery/dist/jquery.js", "node_modules/bootstrap/dist/js/bootstrap.bundle.js"],
                    "dist/assets/bundles/apexcharts.bundle.js": [ "node_modules/apexcharts/dist/apexcharts.min.js"],
                    "dist/assets/bundles/sparkline.bundle.js":  [ "node_modules/jquery-sparkline/jquery.sparkline.min.js"],
                    "dist/assets/bundles/dataTables.bundle.js": [ "dist/assets/plugin/datatables/jquery.dataTables.min.js", "dist/assets/plugin/datatables/dataTables.bootstrap5.min.js","dist/assets/plugin/datatables/dataTables.responsive.min.js"],
                    "dist/assets/bundles/nestable.bundle.js":   [ "dist/assets/plugin/nestable/jquery.nestable.js"],
                    "dist/assets/bundles/invoice.bundle.js":    ["dist/assets/plugin/invoice/beacon.min.js","dist/assets/plugin/invoice/example.js"],
                },
            },
        },
    });

    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask("buildcss", ["sass"]);	
    grunt.registerTask("buildjs", ["uglify"]);
};