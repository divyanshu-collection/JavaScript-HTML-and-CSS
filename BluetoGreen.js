// write your code here
var img = new SimpleImage("duke_blue_devil.png");
print(img);
for (var pixel of img.values()){
    if (pixel.getBlue()==227){
        pixel.setBlue(0);
        pixel.setGreen(255);
        pixel.setRed(255);
    }
}

print(img);

//executed on https://www.dukelearntoprogram.com/
