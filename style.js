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

    var refStyle = document.createElement('dummy').style,
        prefixes = 'Webkit Moz O ms Khtml'.split(' '),
        cache = {};

    var getBrowserSpecificStyleName= function ( styleName ) {
        if ( typeof cache[ styleName ] === "undefined" ) {

            var styleNames=getStyleNameVariations(styleName);

            cache[ styleName ] = null;
            for ( var i in styleNames ) {
                if ( refStyle[ styleNames[i] ] !== undefined ) {
                    cache[ styleName ] = styleNames[i];
                    break;
                }
            }
        }
        return cache[ styleName ];
    };

    var getStyleNameVariations = function(styleName){
        var styleNames = [];
        styleNames.push(styleName);
        for(var index in prefixes){
            var prefix = prefixes[index];
            styleNames.push(prefix+capitalize(styleName));
        }
        return styleNames;
    }

    var capitalize=function(name){
        return name.charAt(0).toUpperCase() + name.substr(1);
    }
    /**
     *
     * @param elem
     * @param style
     */
    this.apply=function(elem,style){
        for (var styleName in style ) {
            if ( style.hasOwnProperty(styleName) ) {
                var actualStyleName = getBrowserSpecificStyleName(styleName);
                if ( actualStyleName !== null ) {
                    elem.style[actualStyleName] = style[styleName];
                }
            }
        }
    };


}
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
            this.transform+= " perspective("+toPosition(perspective)+") ";
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