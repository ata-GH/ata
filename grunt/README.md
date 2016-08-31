<div id="cnblogs_post_body">
<h1><a name="t1"></a>1. 安装nodejs</h1>
<p>　　Grunt和所有grunt插件都是基于nodejs来运行的，安装nodejs非常简单，安装很简单。去&nbsp;<a href="https://nodejs.org/" target="_blank">https://nodejs.org/</a>&nbsp;上下载。</p>
<p>　　安装了nodejs之后，可以在控制台中输入“node -v”来查看nodejs的版本，查看nodejs是否安装成功。</p>
<p>　　<img src="images/1.png"/></p>
<h1><a name="t3"></a>2. 创建一个简单的项目</h1>
<p>　　Grunt是应用于实际项目的，所以我们得有一个简单的项目来演示grunt的安装、使用。</p>
<p>　　首先，我在电脑的D盘下面建了一个“grunt_test”文件夹，里面建了三个空文件夹、两个空文档，名称如下图。</p>
<p>　　<img  src="images/2.png"></p>
<p>　　Package.json的内容我们写成如下格式：</p>
<p>　　<img  src="images/3.png"></p>
<h1><a name="t4"></a>3. 安装grunt</h1>
<p>　　接下来插件的安装，他们的安装过程和grunt一样。grunt插件</p>
<p>　　不在全局安装了，从控制台进入到网站或系统的具体目录下。这里我们进入 D:\grunt_test 目录下。然后输入以下命令。</p>
<p>　　<img  src="images/4.png"></p>
<p>再运行这行命令。等一会儿，会提示安装成功。如下图：</p>
<p>　　<img  src="images/5.png"></p>
<p>　　现在打开package.json看看，“devDependencies”和下图一样有变化？</p>
<p>　　<img  src="images/6.png"></p>
<p>　　再看看文档目录中的文件或者文件夹有什么变化？多了一个“node_modules”文件夹，其中有一个“grunt”文件夹。</p>
<p>　　<img  src="images/7.png"></p>
<p>　　然后你在控制台运行“grunt”命令。如果你得到一个warning提示，那说明grunt已经起作用了。如下图：</p>
<p>　　<img  src="images/8.png"></p>
<p>　　经过以上三步，说明grunt已经在这个目录下成功安装。</p>
<h1><a name="t5"></a>4. 配置Gruntfile.js</h1>
<p>　　Gruntfile.js 这个文件是为了grunt做某种配置的。按照grunt的规定，首先把Gruntfile.js配置成如下格式。</p>
<p>　　<img  src="images/9.png"></p>
<p>　　我们再运行一下grunt命令。</p>
<p>　　<img  src="images/10.png"></p>
<p>　　运行结果出现“Done, without errors”。继续。</p>
<p>　　</p>
<h1><a name="t6"></a>5. Grunt插件介绍</h1>
<p>　　grunt官网的插件列表页面&nbsp;<a href="http://www.gruntjs.net/plugins" target="_blank">http://www.gruntjs.net/plugins</a>&nbsp;需要什么插件可以在插件页搜索。</p>
<p>　　插件分为两类。第一类是grunt团队贡献的插件，这些插件的名字前面都带有“contrib-”前缀，而且在插件列表中有星号标注。第二类是第三方提供的插件，不带有这两个特征。</p>
<ul >
<li>Contrib-jshint——javascript语法错误检查；</li>
<li>Contrib-watch——实时监控文件变化、调用相应的任务重新执行；</li>
<li>Contrib-clean——清空文件、文件夹；</li>
<li>Contrib-uglify——压缩javascript代码</li>
<li>Contrib-copy——复制文件、文件夹</li>
<li>Contrib-concat——合并多个文件的代码到一个文件中</li>
<li>karma——前端自动化测试工具</li>
</ul>
<h1><a name="t7"></a>6. 使用uglify插件（压缩javascript代码）</h1>
<p>　　Uglify插件的功能就是压缩javascript代码。</p>
<p>　　要安装一个插件，你首先要进入这个插件在grunt官网的说明文档页面。我们在grunt官网插件列表页面，找到“contrib-uglify”点击进入。看里面的说明，然后根据说明进行安装。</p>
<p>　　安装uglify插件的方式，和安装grunt是一样的。</p>
<p>　　<img  src="images/12.1.png"></p>
<p>　  安装完成之后， package.json中“devDependencies”节点的变化，以及“node_modules”文件夹里都会有变化。</p>
<p>　　现在还需要在Gruntfile.js 做配置。</p>
<p>　　创建一个js文件，写上一些内容</p>
<p>　　<img  src="images/12.png"></p>
<p>　　测试文件建立好了。接下来就要把这个js文件进行压缩测试。</p>
<p>　　怎么压缩这些都需要配置，在Gruntfile.js中配置。分为三步：</p>
<p>　　第一步，在grunt.initConfig方法中配置 uglify 的配置参数。如下图：</p>
<p>　　<img  src="images/13.png"></p>
<p>　　上图中，对uglify的配置有两项。</p>
<p>　　“options”中规定允许生成的压缩文件带banner，即在生成的压缩文件第一行加一句话说明。注意，其中使用到了pkg获取package.json的内容。</p>
<p>　　“build”中配置了源文件和目标文件。即规定了要压缩谁？压缩之后会生成谁？注意，我们这里将目标文件的文件名通过pkg的name和version来命名。</p>
<p>　　<span style="color: #808080;">（PS：上文中说过的package.json的内容终于找到了他被应用的地方了。这样的好处是：例如，对文件版本的管理，你只需要在package.json中修改即可，grunt会自动根据最新的版本号生成相应版本的文件。你不用手动去修改文件的文件名。）</span></p>
<p>　　最后，这里只是对“options”和“build”的基本应用，还有许多中使用方式，可以去官网查阅。</p>
<p>　　第二步，在 grunt.initConfig 方法之后，要让grunt去加载这一个插件。</p>
<p>　　<img  src="images/14.png"></p>
<p>　　第三步，在grunt命令执行时，要不要立即执行uglify插件？如果要，就写上，否则不写。</p>
<p>　　<img  src="images/15.1.png"></p>
<p>　　以上说的这三步已经OK了，接下来我们去试试。在控制台中运行grunt命令，看得到什么结果。</p>
<p>　　控制台将输入如下信息：</p>
<p>　　<img  src="images/15.png"></p>
<p>　　再去看看，是否生成了一个压缩后的js文件？</p>
<p>　　<img  src="images/16.png"></p>
<p>　　果然。根据package.json中的name和version生成了文件名。而且，压缩后的代码的banner也是符合Gruntfile.js中的配置要求的。</p>
<p>　　接下来介绍jshint的安装和配置。</p>
<p>　　插件的安装和安装grunt、uglify没有任何差别，执行下面的命令</p>
<p>　　<img  src="images/16.1.png"></p>
<p>　　配置jshint和配置uglify一样。在配置uglify时候是三个步骤，这里也是三个步骤。</p>
<p>　　第一步，在grunt.initConfig方法中配置jshint。</p>
<p>　　<img  src="images/17.png"></p>
<p>　　和uglify的配置一样，分为“options”和“build”两个部分。“build”中描述了jshint要检查哪些js文档的语法。 “options”中描述了要通过怎么的规则检查语法，这些规则的描述文件就保存在网站根目录下的一个叫做“.jshintrc”的文件中。因此我们在网 站的根目录下面添加上这个文档，并且填写上文件内容。</p>
<p>　　<img  src="images/18.png"></p>
<p>　　.jshintrc文件中代码的格式也要遵守严格的json语法，</p>
<p>　　第二步，加载插件。和uglify的加载方法一样。没有先后顺序。</p>
<p>　　<img  src="images/19.png"></p>
<p>　　第三步，配置grunt命令启动时，要执行的任务，这里注意先后顺序。是希望先检查语法呢？还是先合并？</p>
<p>　　<img  src="images/20.png"></p>
<p>　　以上三步配置完了之后，我们测试一下这个jshint到底怎么用。先故意将当前创建的test.js文件写一个语法错误。</p>
<p>　　<img  src="images/21.png"></p>
<p>　　然后执行“grunt”命令，看jshint能识别出来这？结果如下：</p>
<p>　　<img  src="images/22.png"></p>
<p>　　看到没有，jshint很清楚识别出了这两个错误。而且jshint错误之后呢，其后面的uglify就没有再继续执行。</p>
<p>　　修改完这些错误，在此执行grunt命令，结果没有提示错误，而且jshint和uglify都顺利执行了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img  src="images/23.png"></p>
<h1><a name="t9"></a>7. 使用csslint插件（检查css语法错误）</h1>
<p>　　检查css文件的语法错误要使用csslint插件，安装配置方法和jshint一样。</p>
<p>　　<img  src="images/24.png"></p>
<h1><a name="t10"></a>8. 使用watch插件</h1>
<p>　　<span style=" line-height: 21px;"> 　　安装watch插件，安装和其他插件一样。配置watch插件，配置如下：</span></p>
<p>　　第一步。配置watch将监控哪些文件的变化，以及这些文件一旦变化，要立即执行哪些插件功能。如下图，watch将监控src文件夹下所有js文件和css文件的变化，一旦变化，则立即执行jshint和uglify两个插件功能。</p>
<p>　　<img  src="images/25.png"></p>
<p>　　第二步，直接贴图</p>
<p>　　<img  src="images/26.png"></p>
<p>　　第三步，直接贴图</p>
<p>　　<img  src="images/27.png"></p>
<p>　　这三步执行完了，即watch插件配置完成。运行grunt命令，控制台提示watch已经开始监听。此时要想停止，按ctrl + c即可。</p>
<p>　　<img  src="images/28.png"></p>
<p>　　既然在监听，我们试一试看监听有没有效。我们将 test.js 代码中去掉一个分号，看它能否自动检查出来这个错误。</p>
<p>　　<img  src="images/29.png"></p>
<p>　　watch检查到了test.js文件的变化，而且通过执行jshint提示了语法错误。假如再把语法错误修复了。会怎样？</p>
<p>　　<img  src="images/30.png"></p>
<p>　　检测到了文件变化，这次语法没有错误，它很顺利的执行了jshint和uglify，执行完毕之后重新进行监听</p>
<h1><a name="t11"></a>9. 上文中所谓的“build”</h1>
<p>　　上文中描述各个插件的配置时，都是用了“build”这一名称作为一个配置项。</p>
<p>　　<img  src="images/31.png"></p>
<p>　　那么这里是不是必须用“build”这一个名字。</p>
<p>　　这里可以用任何字符串代替“build”（但要符合js语法规则）。甚至，可以把“build”指向的内容分开来写。</p>
<p>　　<img  src="images/32.png"></p>
<p>　　我对jshint的配置做了修改，然后执行grunt命令试试。命令行会有“test1”、“test2”的字眼。</p>
<h1><a name="t12"></a>11. 批量安装插件</h1>
<p>　　到现在为止，我刚刚安装了3个插件，“node_modules”文件夹所占据的空间就有18MB了。大家猜一猜，我在上传代码到开发库的时候，会不会把“node_modules”中的内容也上传呢？既然我这么问了，答案肯定是不上传。</p>
<p>　　会把package.json上传上去，而package.json中的“devDependencies”就记录了这个系统的开发依赖项，然后通过nodejs的npm即可批量安装。</p>
<p>　　做个示范，新建一个目录“grunt_test_1”，然后把“grunt_test”中的package.json拷过去。在打开命令行跳转到“grunt_test_1”，执行“<strong>npm install</strong>”命令，会有什么结果。</p>
<p>　　<img  src="images/33.png"></p>
<p>　　此时按回车执行命令，结果在“grunt_test_1”生成了“node_modules”文件夹，里面安装好了package.json中“devDependencies”配置的插件。而且，版本都是一直的。</p>
<p>　　<img  src="images/34.png"></p>
<h1><a name="t13"></a>11. 系统文件结构</h1>
<p>　　<img  src="images/35.png"></p>
<p>　　上图中，“src”文件夹里面存储的是原始的代码文件，“dist”文件夹里面存储的是最终生成的代码文件，“demo”里面存储的是一些测试页面。</p>
