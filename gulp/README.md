<h1>gulp自动化打包工具</h1>
<hr/>
<ol>
    <li>单独运行可以运行css的预编译 命令：'less'</li>
    <li>单独运行可以运行css的合并 命令：'css'</li>
    <li>单独运行可以运行css的压缩 命令：'minifyCss'</li>
    <li>单独运行可以运行html的头尾复用 命令：'fileinclude'</li>
    <li>单独运行可以运行html压缩 命令：'minifyhtml'</li>
    <li>单独运行可以运行雪碧图生成 命令：'sprite'</li>
    <li>单独运行可以运行图片压缩 命令：'images'</li>
    <li>单独运行可以运行js合并 命令：'scripts'</li>
    <li>单独运行可以运行js压缩 命令：'compress'</li>
    <li>单独运行可以运行浏览器实时刷新 命令：'watch'</li>
    <li>运行可以运行上面的预编译，css预编译，合并、js合并、html头尾复用、图片压缩 命令：'default'</li>
    <li>运行可以运行css,js,html压缩 命令：'appDefault'</li>
    <li>单独运行可以运行 命令：''</li>
</ol>
<ul>
    <li>其中的less编译可以指定需要编译那些less文件，合并也可以指定煮需要合并的文件</li>
    <li>js合并时也可以指定出那些需要合并的js,否则是全部合并</li>
    <li>dist/app是最后合并压缩后打包成功的文件</li>
    <li>lib/下面都是源文件</li>
</ul>