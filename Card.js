// Card class has its own instance variables which are the card's attributes
class Card{
    constructor(number,shape,color,shading){
        this.number = number;
        this.shape = shape;
        this.color = color;
        this.shading = shading;
        this.imgSrc = "images/" + shading + color + shape + number + ".jpg";
    }
}
