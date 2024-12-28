// Deck class with an array of 81 card objects each with different attributes
class Deck{
    constructor(){
        this.cards = [];
        //create deck     
        for(let i = 0; i < 3; i++){
            let cNumber = i + 1;
            for(let j = 0; j < 3; j++){
                var cShape = 
                (j == 0) ? "Tilde" :
                (j == 1) ? "Oval" : "Diamond";
                for(let k = 0; k < 3; k++){
                    var cColor =
                    (k == 0) ? "Purple" :
                    (k == 1) ? "Red" : "Green";
                    for(let l = 0; l < 3; l++){
                        var cShading =
                        (l == 0) ? "Solid" :
                        (l == 1) ? "Stripes" : "Blank";
                        this.cards.push(new Card(cNumber,cShape,cColor,cShading));
                    }
                }
            }
        }
        this.shuffleCards();
    }
    // Randomizes the card order in the deck
    shuffleCards(){
        
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }
    // Checks to see if the deck is empty
    isEmpty() {
        return (this.cards.length > 0 ? false : true);
    }
}