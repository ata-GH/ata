
/*����һ�����������ռ�*/
var GH={};


/*
 * �ӿ�����Ҫ��2������
 * 1���ӿڵ�����
 * 2���ӿ���Ҫʵ�ַ������� method[����]*/

//��һ�� ���������ӿ�
//1���ӿ���
GH.Interface = function(name,method){//����һ������ ����Ҫʵ�ֵķ���
    if(arguments.length!==2){throw new Error('this instance has error')}
    this.name=name;
    this.method=[];
    for(var i= 0,len=method.length;i<len;i++){
        if(typeof method[i] !== 'string'){throw new Error('the interface method name is string');}
        this.method.push(method[i]);
    }
};
//2���ж� �����Ƿ�̳�����ķ���
GH.Interface.ensureImplements=function(obj){
    if(arguments.length<1){
        throw new Error('error');
    }
    for(var i= 1,len=arguments.length;i<len;i++){
        var interfaceName=arguments[i];
        if(interfaceName.constructor!=GH.Interface){
            throw new Error('error1');
        }
        for(var j= 0;j<interfaceName.method.length;j++){
            var method=interfaceName.method[j];
            if(!obj[method] || typeof obj[method] !=='function'){
                throw new Error("method '"+method+"'not found");
            }
        }
    }
};

/*�̳� �Ĺ�������*/
GH.extend=function(sub,sup){
    //Ŀ�ģ�ֻ�̳и����ԭ�Ͷ���

    //1.��һ���պ�������ת
    var F=new Function();
    F.prototype=sub.prototype;
    sup.prototype=new F();
    //��ԭ����Ĺ�����
    Object.defineProperty(sup.prototype,'constructor',{
        enumerable:false,
        value:sup
    });
    //��ԭһ�¸����ԭ�Ͷ��� һ���淽������һ������Ը�����Ļ�ø����ԭ�Ͷ���
    sup.superClass=sub.prototype;//��������ľ�̬���Խ��ո����ԭ�Ͷ���

    //�жϸ����ԭ�Ͷ���Ĺ����� ���ӱ��գ�
    if(sub.prototype.constructor==Object.prototype.constructor){
        Object.defineProperty(sub.prototype,'constructor',{
            enumerable:false,
            value:sub
        })
    }
};
/*
* ����ģʽ
* ʵ��һ�����������ʱ�䴦�����*/
GH.EventUtil={
    addHandler:function(elemt,type,handler){
        if(elemt.addEventListener){ //��IE
            elemt.addEventListener(type,handler,false);
        }else if(elemt.attachEvent){ //IE
            elemt.attachEvent(type,handler)
        }
    },
    removeHandler:function(elemt,type,handler){
        if(elemt.addEventListener){ //��IE
            elemt.removeEventListener(type,handler,false);
        }else if(elemt.attachEvent){ //IE
            elemt.detachEvent(type,handler)
        }
    }
};