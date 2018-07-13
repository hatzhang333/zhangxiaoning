var gulp = require("gulp");
var sass = require("gulp-sass-china");
var uglify = require("gulp-uglify");
var connect = require("gulp-connect");
gulp.task("sass",function(){
	gulp.src("xiaomi.scss")
	.pipe(sass())
	.pipe(gulp.dest('sass'))
	.pipe(connect.reload())
})