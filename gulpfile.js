
// Enable strict mode
'use strict';

// Require dependencies
const gulp = require('gulp'),
inlineCss = require('gulp-inline-css'),
htmlMin = require('gulp-htmlmin');

// Configuration
const config = {
    html: {
        src: './*.html',
        dest: './dist/',
    }
}

// Minifies HTML and inlines CSS
const htmlTask = () => {
    return gulp.src(config.html.src)
        .pipe(inlineCss())
        .pipe(htmlMin({
            collapseWhitespace: true,
            removeComments: true,
        }))
        .pipe(gulp.dest(config.html.dest));
}

// Set the default task for Gulp to run
exports.default = htmlTask
