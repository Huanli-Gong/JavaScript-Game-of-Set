// Table class to represent the visible board
class Table{
    constructor(deck){
        this.cards = [];
        for (let i=0; i<12; i++) {
            this.cards.push(deck.cards.pop());
        }
    }
    // Method to add the cards onto the screen
    display(){
        let index=0
        this.cards.forEach(card => {
            let cardFace = document.createElement("div");
            let cardImage = document.createElement("img");
            //To use for CSS
            cardFace.classList = "cardFace";
            cardImage.classList = "cardImage";
    
            //cardFace.textContent = card.number + " " + card.shape + " " + card.color + " " + card.shading;
            cardImage.src = card.imgSrc;
    
            cardFace.setAttribute("index", index);
            cardFace.addEventListener("click", handleInput);
    
            sectionQ.appendChild(cardFace);
            cardFace.appendChild(cardImage);
            index=index+1
        }) 
    }
    // Returns the length of the cards array
    size(){
        return this.cards.length;
    }
    // Given a card object adds it to the table (board)
    tableAdd(cardNew){
        this.cards.push(cardNew);
    }

    // Randomizes the table (called by 'Shuffle' button)
    shuffleTable(){
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }
}
