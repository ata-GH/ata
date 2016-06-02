<p><strong>1.YSlow的使用教程</strong></p>
<hr>
<p>1.安装</p>
<ul>
<li>Firefox安装：<br/>
1、进入<a href="https://addons.mozilla.org/en-US/firefox/addon/yslow/">Firefox插件主页</a>添加对于版本的YSlow插件（注意Firefox中的YSlow要配合firebug使用）；<br/>
2、或者在Firefox的组件中心搜索添加YSlow插件。<br/>
 安装好后打开firebug审查元素最后会出现YSlow选项卡。如图：<br/>
<img src="images/1.png">
</li>
<li>chrome安装: <br/>
1、直接下载YSlow插件，在打开chrome的扩展程序，讲下载的YSlow插件（以.cxr结尾）拽入扩展程序面板即可。<br/>
2、也可在扩展程序中获取更多扩展程序中搜索并添加YSlow插件，也就是<a href="https://chrome.google.com/extensions/detail/ninejjcohidippngpapiilnmkgllmakh#">chrome插件中心</a>。（有时候打不开）
 安装好后浏览器顶部会出现YSlow选项卡。如图：<br/>
 <img src="images/2.png">
</li>
</ul>
<p>2.Firefox和chrome中使用YSlow</p>
<ul>
<li>
1、如果是Firefox打开需要测试的网页，打开firebug，选择YSlow选项卡点击run test按钮<br/>
如果是chrome打开需要测试的网页，点击浏览器顶部右边的YSlow按钮选项卡在点击run test按钮<br/>
<img src="images/3.png"/><br/>
2、分析测试结果：<br/>选择YSlow第二个选项卡。<br/>
其中可以查看测试结果的分数，等级，以及每个单项的等级，和具体的建议。<br/>
这些准则是根据相对于性能的重要性来排列顺序，分别从A级到F级，A级为最高。如果页面与某一个规则无关，则显示N/A。如图：<br/>
<img src="images/4.png"><br/>
3、选择YSlow的第三个选项卡。<br/>
其中可以查看具体的网页组件检视表：<br/>
type：该组件的类型。<br/>
size(kb)：该组件的gizp压缩的大小。<br/>
cookie(bytes)：cookie在http请求头的字节数。<br/>
header：http信息头。点击放大镜查看全面信息。<br/>
url：链接地址。<br/>
expires(Y/M/D)：日期的expire头。属于缓存的一种。<br/>
response time：响应时间。<br/>
etag：etag响应头，设置缓存的一种。<br/>
<img src="images/5.png"><br/>
3、选择YSlow的第三个统计信息视图。<br/>
左边图是显示没空缓存的加载情况。<br/>
右边是页面使用缓存的加载情况<br/>
<img src="images/6.png">
</li>
<li>总结：<br/>
YSlow法则指出：用户的响应时间的80%花费在前端，其中最主要的部分用在下载文档中的图片、js、css、flash等资源上。相对于页面渲染，HTTP请求的开销是较大的。<br/>
YSlow的优化目的是为了减少页面的请求数、降低请求所占的带宽、减少资源的浪费。<br/>
其中主要的根据谷歌指定的22条准则进行测评并提供建议。
</li>
</ul>
<br/>
<br/>
<br/>
<p><strong>2.fiddler的使用教程</strong></p>
<hr>
<p>1.安装</p>
<ul>
<li>进入fiddler官网下载安装喜欢的磁盘：<br/></li>
<li>打开fiddler，显示如下界面<br/>
其中面板顶部操作栏的意思分别是：<br/
<img src="images/icon1.png"/>：给每一个会话设置注释<br/>
<img src="images/icon2.png"/>：让当前选择的会话回放<br/>
<img src="images/icon3.png"/>：清除会话（下拉框可以选择具体要清除的会话）<br/>
<img src="images/icon4.png"/>：跳出当前会话<br/>
<img src="images/icon5.png"/>：选择流模式<br/>
<img src="images/icon6.png"/>：解压请求<br/>
<img src="images/icon7.png"/>：保持会话（下拉框可以选择某一类型的会话）<br/>
<img src="images/icon8.png"/>：监听浏览器端口<br/>
<img src="images/icon9.png"/>：查找会话<br/>
<img src="images/icon10.png"/>：储存当前页面选择的会话<br/>
<img src="images/icon11.png"/>：添加屏幕快照捕获按住shift键跳过倒计时<br/>
<img src="images/icon12.png"/>：打开浏览器<br/>
<img src="images/icon13.png"/>：清除缓存<br/>
<img src="images/icon14.png"/>：编码或解码<br/>
<img src="images/icon15.png"/>：分离面板<br/>
<img src="images/icon16.png"/>：数据统计<br/>
<img src="images/icon17.png"/>：请求详情<br/>
<img src="images/icon18.png"/>：文件代理<br/>
<img src="images/icon19.png"/>：前后端借口连调<br/>
<img src="images/icon20.png"/>：页面会话对比<br/>
<img src="images/icon21.png"/>：网站新能分析<br/>
1、可以在请求详情中查看每个请求内容<br/>
<img src="images/7.png"/> <br/>
2、可以查看客户端请求到服务器响应中的每一步。<br/>
<img src=""><br/>
3、可以查看所有请求的响应时间<br/>
<img src="images/011.png" /><br/>
</li>
<li>总结：fiddler主要是对http抓包，可以查看所有请求每一步所花的时间，响应内容HTTP统计视图，等等..</li>
</ul>


























