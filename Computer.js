// Checks to to see if the card attributes are all equal or not
function check(a,b,c){
    return (a===b && a===c && b===c) || (a!==b && a!==c && b!==c)
}
// Given the user selected cards, calls check to see if they are all equal or not
function verifySet(card1,card2,card3,levels){
    switch(levels)
    {
        case 1:
            return check(card1.number,card2.number,card3.number)  
        case 2:
            return check(card1.number,card2.number,card3.number)&&check(card1.shape,card2.shape,card3.shape)
        case 3:
            return check(card1.number,card2.number,card3.number)&&check(card1.shape,card2.shape,card3.shape)&&check(card1.color,card2.color,card3.color)
        case 4:
            return check(card1.number,card2.number,card3.number)&&check(card1.shape,card2.shape,card3.shape)&&check(card1.color,card2.color,card3.color)&&check(card1.shading,card2.shading,card3.shading)
        default:
            return false      
    }
}
// Generates hint for the user (outputs two cards the user can make a set with)
function hint(table,level){
    for (let i = 0; i<table.cards.length; i++) {
        for (let j = i+1; j<table.cards.length; j++) {
            for (let k = j+1; k<table.cards.length; k++) {
                if (verifySet(table.cards[i],table.cards[j],table.cards[k],level)){
                    return "Try making a set with card "+i+" and "+j
                }
            }
        }
    }
    return "There is no set on the table"
}
// Generates statistics for the user (probability of a set not appearing on the board, avg number of sets on a table) 
function statistics(level,times,number){
    let setNumber=0.0
    let noSet=0.0
    for(let time=0;time<times;time++){
        let deck = new Deck();
        let table = [];
        let find=false
        for(let l=0;l<number;l++){
            table.push(deck.cards.shift())
        }
        for (let i = 0; i<table.length; i++) {
            for (let j = i+1; j<table.length; j++) {
                for (let k = j+1; k<table.length; k++) {
                    if (verifySet(table[i],table[j],table[k],level)){
                        setNumber++
                        find = true
                    }
                }
            }
        }
        if (!find){
            noSet++
        }
    }
    return "Average set number per table is "+setNumber/times+ " and probability of a set not appearing is "+noSet/times
}
