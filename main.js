const sectionQ = document.querySelector('section');
let inputBuffer = [];
let inputArray = [];
let deck = new Deck();
let table = new Table(deck);
let timerID;
let level;
const audio1 = new Audio('sound/correct.mp3');
const audio2 = new Audio('sound/wrong.mp3');
// 'Disables' scroll by snapping to position (0,0) when user tries to scroll
window.addEventListener("scroll", disableScroll);
function disableScroll(){
    window.scrollTo(0,0);
}

// When begin game button is clicked -> enable scroll, start timer, and disable the popup by adding display: none
function disablePopup(){
    document.getElementById("popup").style.display = "none";
    window.removeEventListener("scroll", disableScroll);
    window.onscroll=null;
    timerID = window.setInterval(startTimer, 1000);
}
// Gives the user a hint (function used for Hint button)
function getHint(){
    alert(hint(table,level))
}
// Adds three cards to the board (function used for Add cards button)
function addCards() {
	sectionQ.innerHTML = '';
	if(!deck.isEmpty()){
		for(let i = 0; i < 3; i++){
			table.tableAdd(deck.cards.shift());
		}
	}
	table.display();
}
// shuffles the board (function used for the Shuffle button)
function shuffle(){
	sectionQ.innerHTML = '';
	table.shuffleTable();
	table.display();
}
// Updates the cards when a set is found also checks to see the end game requirement
function updateCards() {

		for (let i=0; i<3; i++) {
			let x = inputBuffer.shift();
			let index = inputArray.shift();
			
			if (deck.cards.length > 0 && table.cards.length <= 12) {
				let card = deck.cards.pop();
			

				table.cards[index]=card;
        		x.setAttribute("index", index);

				x.firstChild.src = card.imgSrc;
				x.firstChild.style.boxShadow = "10px 10px 5px rgb(107, 104, 104)";
			}
			else {
				table.cards.splice(index,1)
				if(inputArray[0]>=index){
					inputArray[0]=inputArray[0]-1
				}
				x.remove();				
				htmlCards = document.querySelectorAll(".cardFace");
				for (let j=0; j<htmlCards.length; j++) {
					htmlCards[j].setAttribute("index",j);
				}
			}
		}

		document.getElementById("resultDiv").textContent = "";

		if (table.cards.length == 0) {
			document.getElementById("resultDiv").textContent = "Congrats you won the game!";
			clearInterval(timerID);
			setTimeout(function(){location.href="index.html";},5000);
		}

		numInput = 0;
}

let numInput = 0;
function checkSet() {
		let txtMsg;
		let color;
		let func;

		if (verifySet(table.cards[inputArray[0]],table.cards[inputArray[1]],table.cards[inputArray[2]],level)){
			audio1.play();
			txtMsg = "Congrats you found a set!";
			color = "green";
			func = updateCards;
			incrementScore();
			
		}
		
		else {
			txtMsg = "Sorry that was not a set!";
			color = "red";
			audio2.play();
			func = function () {
				for (let i=0; i<3; i++) {
					inputArray.shift()
					inputBuffer.shift().firstChild.style.boxShadow = "10px 10px 5px rgb(107, 104, 104)"
				}
				numInput = 0;
				document.getElementById("resultDiv").textContent = "";};
		}
		
		document.getElementById("resultDiv").textContent = txtMsg;

		for (let i=0; i<3; i++){
			inputBuffer[i].firstChild.style.boxShadow = "0 0 10px 8px " + color;
		}
		
		setTimeout(func, 700);

}
// Reads the cards the user selects and adds borders and 'highlights' to make it visibility selected
function handleInput() {
	if (!inputBuffer.includes(this)) {
		numInput++;
		inputBuffer.push(this);
		inputArray.push(this.getAttribute("index"))
		this.firstChild.style.boxShadow = "0 0 10px 8px yellow";
		if (numInput == 3) {
			setTimeout(checkSet, 700);	
		}
	}

	else if (numInput < 3){
		numInput--;
		this.firstChild.style.boxShadow = "10px 10px 5px rgb(107, 104, 104)";
		inputArray.splice(inputArray.indexOf(this.getAttribute("index")),1);
		inputBuffer.splice(inputBuffer.indexOf(this),1);
	}
}

// Gets called by itself when popup 'landing page' is disabled
let secInc = 0;
let minInc = 0;
let seconds = 0;
let minutes = 0;
function startTimer(){
    secInc++;
    if (secInc % 60 == 0){
        minInc++;
        secInc = 0;
    }

    if(secInc < 10){
        seconds = "0" + secInc.toString();
    }
    else {
        seconds = secInc;
    } 
    if(minInc < 10){
        minutes = "0" + minInc.toString();
    } else {
        minutes = minInc;
    }


    document.getElementById("timerVal").innerHTML = minutes + ":" + seconds;
}

//Call this function to increment score
let score = 0;
function incrementScore(){
    score+=level;
    document.getElementById('scoreVal').innerHTML = score;
}

level = parseInt(location.search.substring(1));
table.display();

