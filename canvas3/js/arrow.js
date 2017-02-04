/*绘制一个箭头*/
function Arrow(){
    this.x=0;
    this.y=0;
    this.rotation=0;
    this.color='blue';
}
Arrow.prototype.draw=function(context){
    context.save();
    context.fillStyle=this.color;

    context.translate(this.x,this.y);//坐标移动this.x与this.y
    context.rotate(this.rotation);//设置旋转角度

    context.beginPath();
    context.moveTo(-40,-10);
    context.lineTo(10,-10);
    context.lineTo(10,-30);
    context.lineTo(40,0);
    context.lineTo(10,30);
    context.lineTo(10,10);
    context.lineTo(-40,10);
    context.closePath();//闭合路径
    context.fill();//填充
    context.restore();
};