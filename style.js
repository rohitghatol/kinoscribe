/**
 * Created by rohitghatol on 7/12/14.
 */

var toNumber= function (value, defaultValue) {
    return isNaN(value) ? (defaultValue || 0) : Number(value);
}

var toPosition= function(value){
    return isNaN(value) ? value : (toNumber(value)+"px");
}

var toDeg = function(value){
    return toNumber(value) +"deg"
}

var negate = function(value){
    return toNumber(value) * -1;
}

var inverse = function(value){
    return 1/toNumber(value);
}
/**
 *
  * @constructor
 */
var Style = function(){

    /**
     *
     * @param elem
     * @param style
     */
    this.apply=function(elem,style){


        if(style.overflow!=null){
            elem.style.overflow=style.overflow;
        }
        if(style.position!=null){
            elem.style.position=style.position;
        }
        if(style.left!=null){
            elem.style.left=style.left;
        }
        if(style.top!=null){
            elem.style.top=style.top;
        }
        if(style.width!=null){
            elem.style.width=style.width;
        }
        if(style.height!=null){
            elem.style.height=style.height;
        }
        if(style.transform!=null){
            elem.style.transform=style.transform;
            elem.style.webkitTransform=style.transform;

        }
        if(style.transformStyle!=null){
            elem.style.transformStyle=style.transformStyle;
            elem.style.webkitTransformStyle=style.transformStyle;
        }

        if(style.webkitTransformationOrigin!=null){
            elem.style.webkitTransformationOrigin=style.webkitTransformationOrigin
        }

        if(style.transition!=null){
            elem.style.transition=style.transition
            elem.style.webkitTransition=style.transition

        }
    };
}
//
//var Style = function(){
//
//    /**
//     *
//     * @param elem
//     * @param style
//     */
//    this.apply=function(elem,style){
//        if(style.transformStyle!=null){
//            style.webkitTransformStyle=style.transformStyle;
//        }
//        if(style.transition!=null){
//            style.webkitTransition=style.transition
//        }
//        for(var key in style){
//            elem.style[key]=style[key];
//        }
//
//    };
//
//
//}
/**
 *
 * @constructor
 */
var TransformBuilder = function(){
    this.transform="";
    this.translate=function(x,y){

        this.transform+=" translate("+toPosition(x)+","+toPosition(y)+")";
        return this;
    }
    this.translate3d=function(x,y,z){
        this.transform+=" translate3d("+toPosition(x)+","+toPosition(y)+","+toPosition(z)+")";
        return this;
    }
    this.rotate3d=function(x,y,z,reverse){
        var rx =" rotateX("+toDeg(x)+") ";
        var ry =" rotateY("+toDeg(y)+") ";
        var rz =" rotateZ("+toDeg(z)+") ";
        this.transform+= reverse?rz+ry+rx:rx+ry+rz;
        return this;
    }
    this.perspective=function(perspective){
        if(perspective!=null){
            this.transform+= " perspective("+toNumber(perspective)+") ";
        }
        return this;
    }
    this.scale=function(scale){
        if(scale!=null){
            this.transform+= " scale("+toNumber(scale,1)+") ";
        }
        return this;
    }

}