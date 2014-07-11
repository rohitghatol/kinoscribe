/**
 * Created by rohitghatol on 7/10/14.
 */


function PresetShapes(){
    //TODO - Write better code here... :p
    var xhttp=new XMLHttpRequest();
    xhttp.open("GET","presetShapeDefinitions.xml",false);
    xhttp.send();
    this.xmlDoc = xhttp.responseXML;





}

PresetShapes.prototype.getShapeInfo = function(shapeName){

    var parsers={
        "ahLst":function(ahLst,shapeInfo){

        },
        "cxnLst":function(cxnLst,shapeInfo){

        },
        "rect":function(rect,shapeInfo){

        },
        "avLst":function(avLstNode,shapeInfo){
            shapeInfo.avLst=[];
            for(var index=0;index<avLstNode.children.length;index++){
                var gdNode = avLstNode.children[index];

                shapeInfo.avLst[index]={
                    name:gdNode.getAttribute("name"),
                    fmla:gdNode.getAttribute("fmla")
                };
            }
        },
        "gdLst":function(gdLstNode,shapeInfo){
            shapeInfo.gdLst=[];
            for(var index=0;index<gdLstNode.children.length;index++){
                var gdNode = gdLstNode.children[index];

                shapeInfo.gdLst[index]={
                    name:gdNode.getAttribute("name"),
                    fmla:gdNode.getAttribute("fmla")
                };
            }
        },
        "pathLst":function(pathLstNode,shapeInfo){
            shapeInfo.pathLst=[];
            for(var index=0;index<pathLstNode.children.length;index++){
                var pathNode = pathLstNode.children[index];

                shapeInfo.pathLst[index]={};
                parsers[pathNode.nodeName](pathNode,shapeInfo.pathLst[index]);
            }
        },
        "path":function(pathNode,pathLst){
            pathLst.path=[];
            for(var index=0;index<pathNode.children.length;index++){
                var pathChildNode = pathNode.children[index];
                pathLst.path[index]={}
                parsers[pathChildNode.nodeName](pathChildNode, pathLst.path[index]);
            }
        },
        "moveTo":function(moveToNode,path){
            path.command="moveTo";
            path.pts=[];

            var ptNode=moveToNode.children[0];
            parsers[ptNode.nodeName](ptNode, path.pts);


        },
        "lnTo":function(lnToNode,path){
            path.command="lnTo";
            path.pts=[];
            var ptNode=lnToNode.children[0];
            parsers[ptNode.nodeName](ptNode, path.pts);


        },
        "arcTo":function(arcToNode,path){
            path.command="arcTo";
            path.wR=arcToNode.getAttribute("wR");
            path.hR=arcToNode.getAttribute("hR");
            path.stAng=arcToNode.getAttribute("stAng");
            path.swAng=arcToNode.getAttribute("swAng");

         },
        "cubicBezTo":function(cubicBezToNode,path){
            path.command="cubicBezTo";
            path.pts=[];
            for(var index=0;index<cubicBezToNode.children.length;index++){
                var ptNode = cubicBezToNode.children[index];
                parsers[ptNode.nodeName](ptNode, path.pts);
            }
        },
        "close":function(closeNode,path){
            path.command="close";
        },
        "pt":function(ptNode,pts){
            pts.push({
                x:ptNode.getAttribute("x"),
                y:ptNode.getAttribute("y")
            })

        }


    }
    var shapeInfo = {};
    var nodes=this.xmlDoc.evaluate("//"+shapeName, this.xmlDoc, null, XPathResult.ANY_TYPE, null);
    var shapeDom=nodes.iterateNext();
    for(var index=0;index<shapeDom.children.length;index++){
        var node = shapeDom.children[index];
        parsers[node.nodeName](node,shapeInfo);
    }


    return shapeInfo;
}
