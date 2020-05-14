// write your code here
var img = new SimpleImage("drewgreen.png");
print(img);
//var w = img.getWidth()/3;

for (var pixel of img.values()){
    swapRedGreen(pixel);
}

function swapRedGreen(pixel){
    var Rpix = pixel.getRed();
    var Gpix = pixel.getGreen();
    pixel.setRed(Gpix);
    pixel.setGreen(Rpix);
}
print(img);

//executed on https://www.dukelearntoprogram.com/
