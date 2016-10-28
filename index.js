var gulp = require('gulp');
var Elixir = require('laravel-elixir');
var uncss = require('gulp-uncss');

var config = Elixir.config;

Elixir.extend('uncss', function(styles, options, output) {

    new Elixir.Task('uncss', function() {
        this.log('Start uncss');

        return gulp.src(styles)
        .pipe(uncss(options))
        .pipe(gulp.dest(output));
    });
});
