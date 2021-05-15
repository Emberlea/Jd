var mac= new fabric.Cavas=("mc");

var s_x=200;
var s_y=200;

var bl_h=10;
var bl_w=10;

var super_o="";
var block_o="";

function first(){
    fabric.Image.fromURL("Screenshot 2021-05-15 123623.png",function (Img){
        super_o=Img;
        super_o.scaleToWidth(100);
        super_o.scaleToHeight(150);
        super_o.set({
            top:s_x,
            left:s_y
        });
        canvas.add(super_o);
    });
}
function second(){
    fabric.Image.fromURL(get_img,function (Img){
        block_o=Img;
        block_o.scaleToWidth(100);
        block_o.scaleToHeight(150);
        block_o.set({
            top:s_x,
            left:s_y
        });
        canvas.add(block_o);
    });
}