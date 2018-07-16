弹性盒布局 学习
========

****

##弹性盒布局的相关介绍##
>弹性盒子是一种用于在页面上布置元素的布局模式。弹性盒子中的子元素可以在各个方向上进行布局，并且能以弹性的尺寸来适应显示空间



###弹性容器（Flex container）###
>包含着弹性项目的父元素。 通过设置display属性的值为flex或者inline-flex来定义弹性容器。



###弹性项目（Flex item）###
>弹性容器的每个子元素都称为弹性项目。 **弹性容器直接包含的文本将被包覆成匿名弹性单元**



###轴（Axis）
>每个弹性框布局包含两个轴。弹性项目沿其一次排列的轴称为**主轴(main Axis)**。垂直于**主轴**的那根轴称为**侧轴(cross Axis)**  
  
  + flex-direction 确立主轴
  + justify-content 定义了在当前行上，弹性项目沿主轴如何排布
  + align-items 定义了在当前行上，弹性项目沿测轴如何排布
  + align-self 定义了单个弹性项目在侧轴上应当如何对齐，这个定义会覆盖align-items所确认的默认值。



###方向（Direction）
>弹性容器的**主轴起点(main start)/主轴终点(main end)**和**侧轴起点(cross start)/侧轴终点(cross end)**
描述了弹性项目排布的起点与终点。它们的具体取决于弹性容器的主轴和侧轴中，由writing-mode确立的方向（从走到右，从右到左，and so on）。
 +order属性将元素与序号关联起来，以此决定那些元素先出现。
 +flex-flow属性是flex-direction和flex-wrap属性的简写，觉得弹性项目如何排布。


###行（Line）
>根据flex-wrap属性。弹性项目可以排布在单个行或者多个行中，此属性控制侧轴的方向和新行排列的方向。


###尺寸（Dimension）
>根据弹性容器的主轴与侧轴，弹性项目的宽和高中，对应主轴的称为 **主轴尺寸(main size)** ，对应侧轴的称为 **侧轴尺寸(cross size)**。

 + min-height与min-width属性初始值为0.
 + flex属性是flex-grow、flex-shrink和flex-basis属性的简写，描述弹性项目的整体的伸缩性。



****  

##定义一个弹性盒子
>需要将一个容器定义为弹性容器，其子元素则成为弹性项目。 **display:flex;或者display：inline-flex;**  
值flex使弹性项目成为块级元素，值inline-flex使弹性容器成为单个不可分的行内块级元素。  
**注意：添加厂商前缀是添加给display的属性值，例如display：-webkit-flex;**  
由于弹性盒子使用了不同的布局算法，某些属性用在弹性容器上没有意义：

- 多栏布局的 `column-*`属性对弹性项目无效
- float与clear对弹性项目无效，使用float将使元素的display属性计为block。
- vertical-align对弹性项目无效。

##示例
见demo
























