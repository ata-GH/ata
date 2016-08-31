module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    //清除build
    time: Date.now(),
    //编译less文件
    less: {
      options:{
        cleancss: true,
        Choices: 'gzip',
        paths:'src/',
        ieCompat: true,
        banner:'/*\n@ project:<%=pkg.name%>\n@ date:<%=grunt.template.today("yyyy-mm-dd")%>\n*/'
      },
      build: {
        files: {
            'src/css/reset.min.css': 'src/css/less/reset.less'
            //'style/css/css3.min.css': 'style/less/css3.less'
        }
      }
    },
    includereplace: {
        html: {
            src: ['main/*'],
            //dest: 'dist/',
            dest:'',
            expand: true,
            cwd: 'html'
        }
    },
      //----------监听端口---------------
    connect: {
      options: {
        expand: true, 
        port: 9527,
        hostname: 'localhost', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
        livereload: 3577  //声明给 watch 监听的端口
      },
      server: {
        options: {                    
          open: true, //自动打开网页 http://
          base: [
            ''  //主目录                  
          ]                
        }
      }
    },

    //-------------监听变化-------------
    watch: {
      livereload:{
        options: {
          expand: true, 
          spawn: false,
          open: true,
          livereload: '<%=connect.options.livereload%>'  //监听前面声明的端口  35729
        },
        files: [  //下面文件的改变就会实时刷新网页
          'html/main/*.html',
          'src/{,*/}*.{png,jpg,gif,css,less}'
          //'js/{,*/}*.js'
          //'app/images/{,*/}*.{png,jpg}'
        ]
      },
      less: {
        files: '*.less',
        tasks: ['less:build'],
        options:{
          cwd: 'src/css/less/',
          spawn: false
        }
      },
      html: {
          files:'*.html',
          tasks:['includereplace:<%=action%>'],
          options:{
              cwd: 'html/',
              spawn: false
          }
      }
    },
    //uglify插件配置信息
    uglify:{
      options: {
        banner: '*\n@ project:<%=pkg.name%>\n@ date:<%=grunt.template.today("yyyy-mm-dd")%>\n*/'//添加banner
      },
      buildall: {
      //任务三：按原文件结构压缩js文件夹内所有JS文件
        //files: [{
        //  expand:true,
        //  cwd:'src/js/',//js目录下
        //  src:'*.js',//所有js文件
        //  dest: 'js/'//输出到此目录下
        //}]

        // --------部分压缩---------
        files:{
          'src/js/index.min.js':['src/js/index.js'],
          'src/js/CultureShow.min.js':['src/js/CultureShow.js']
        }
      }
    },
    //JavaScript静态语法检查的工具
    jshint:{
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      uses_defaults: ['src/js/*.js'],
      with_overrides: {
        options: {
          curly: false,
          undef: true
        },
        files: {
          src: ['src/js/**/*.js']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify'); //压缩js
  grunt.loadNpmTasks('grunt-contrib-less'); //编译css文件
  grunt.loadNpmTasks('grunt-contrib-watch'); //监听页面端口
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-include-replace');//@@include("parts.html") 输入grunt命令后输出的html页面即包含parts.html页面内容
  grunt.loadNpmTasks('grunt-processhtml');//html 页面变化时修改页面
  grunt.registerTask('default', [ 'less:build','includereplace:html','watch','uglify:buildall','jshint']);
  //,'connect:server'

};
