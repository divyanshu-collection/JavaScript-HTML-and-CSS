//foreground image
var fimg = new SimpleImage("drewRobert.png");
//background image
var bimg = new SimpleImage("dinos.png");
//new image, same as the size of foreground image
var newimg = new SimpleImage(fimg.getWidth(), fimg.getHeight());

for (var fpix of fimg.values()){
    if (fpix.getGreen() > fpix.getBlue()+fpix.getRed()){
        var x = fpix.getX();
        var y = fpix.getY();
        var bpix = bimg.getPixel(x,y);
        newimg.setPixel(x,y,bpix);
    }
    else{
        newimg.setPixel(fpix.getX(), fpix.getY(),fpix)
    }
}
print(newimg);
