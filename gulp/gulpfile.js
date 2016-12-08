var gulp=require('gulp');
    concat=require('gulp-concat'),//
    uglify=require('gulp-uglify'),//
    //jshint=require('gulp-jshint'),//
    less=require('gulp-less'),
    contactCss=require('gulp-concat-css'),//
    minifyCss=require('gulp-minify-css'),
    minifyHtml = require("gulp-minify-html"),
    watch = require('gulp-watch'),
    include= require('gulp-file-include'),
    livereload= require('gulp-livereload'),
    imageminify=require('gulp-imagemin'),
    spriter= require('gulp-css-spriter');

/*js合并*/
gulp.task('scripts',function(){
   return gulp.src(['./lib/js/a.js','./lib/js/b.js'])
       .pipe(concat('main.js'))
       .pipe(gulp.dest('./dist/js'));
});
/*js压缩*/
gulp.task('compress',function(cb){
    return gulp.src('./dist/js/*.js') // 要压缩的js文件
        .pipe(uglify())  //使用uglify进行压缩,更多配置请参考：
        .pipe(gulp.dest('dist/app/js')); //压缩后的路径
});
/*gulp.task('compress',['scripts'],function(cb){
    return gulp.src('./dist/js/!*.js') // 要压缩的js文件
    .pipe(uglify())  //使用uglify进行压缩,更多配置请参考：
    .pipe(gulp.dest('dist/app/js')); //压缩后的路径
});*/
/*/!*js代码检查*!/
gulp.task('link',['compress'],function(){
    return gulp.src('.dist/js/!*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
});*/

/*css编译*/
gulp.task('less',function(){
    //return gulp.src('./lib/css/less/*.less')
    return gulp.src(['./dist/css/less/reset.less','./dist/css/less/index.less'])
    .pipe(less())
    .pipe(gulp.dest('./lib/css'));
});
/*css合并*/
gulp.task('css',['less'],function(){
    return gulp.src(['./lib/css/reset.css','./lib/css/b.css'])
        .pipe(contactCss('main.css'))
        .pipe(gulp.dest('./dist/css'));
});
/*css压缩*/
gulp.task('minifyCss',function() {
    gulp.src('./dist/css/*.css') // 要压缩的css文件
    .pipe(minifyCss()) //压缩css
    .pipe(gulp.dest('dist/app/css'));
});

/*gulp.task('minifyCss',['css'],function(){
    gulp.src('./dist/css/!*.css') // 要压缩的css文件
    .pipe(minifyCss()) //压缩css
    .pipe(gulp.dest('dist/app/css'));
});*/


/*html头尾部件复用*/
gulp.task('fileinclude', function() {
    gulp.src('./lib/main/**.html')
        .pipe(include({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist/html'));
});
/*html压缩*/
gulp.task('minifyhtml', function () {
    gulp.src('dist/html/*.html') // 要压缩的html文件
        .pipe(minifyHtml()) //压缩
        .pipe(gulp.dest('./dist/app/html'));
});
/*gulp.task('minifyhtml',['fileinclude'], function () {
    gulp.src('dist/html/!*.html') // 要压缩的html文件
    .pipe(minifyHtml()) //压缩
    .pipe(gulp.dest('./dist/app/html'));
});*/



/*图片压缩*/
gulp.task('images',['sprite'], function() {
    gulp.src('./lib/css/images/*.*')
    .pipe(imageminify({optimizationLevel:5}))
    .pipe(gulp.dest('./dist/css/images'))
    .pipe(gulp.dest('./dist/app/css/images'));
});

/*浏览器实时刷新*/
gulp.task('watch',function() {
    livereload.listen();
    gulp.watch('./dist/**/*.*',function(e){
        livereload.changed(e.path);
    });
});
/*雪碧图生成*/
gulp.task('sprite', function() {
    return gulp.src('./lib/css/sprite.css')
    .pipe(spriter({'spriteSheet':'./lib/css/images/spritesheet.png','pathToSpriteSheetFromCSS': './images/spritesheet.png'}))
    .pipe(gulp.dest('./dist/css'));
});
gulp.task('default',['css','fileinclude','images','scripts']);
gulp.task('appDefault',['minifyhtml','images','minifyCss','compress']);

