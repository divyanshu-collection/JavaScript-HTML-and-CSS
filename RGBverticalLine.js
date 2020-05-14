// write your code here
var img = new SimpleImage("chapel.png");
print(img);
var w = img.getWidth()/3;

for (var pixel of img.values()){
    var xval= pixel.getX();
    if (xval < w){
        pixel.setRed(255);
    }
    else if ((xval > w) && (xval< (w*2))){
         pixel.setGreen(255);
    }
    else{
         pixel.setBlue(255);
    }
    //swapRedGreen(pixel);
}

print(img);

//executed on https://www.dukelearntoprogram.com/
