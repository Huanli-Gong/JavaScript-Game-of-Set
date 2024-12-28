# JavaScript Game of Set For OSU CSE3901

>## To Run: 
        To start on vm with firefox (when in the project directory): firefox index.html
            OR
        TO start manually: Open the index.html file in the file explorer
>## How To Play:
        Hello, and welcome to the Game of Set
        To play the game you will select a set of 3 cards
        Each card has 1 of 3 values...
        ... 1 of 3 colors...
        ... 1 of 3 shapes...
        ... and 1 of 3 shadings
        Choose a set of 3 cards where each attriibute is 
        either the SAME or DIFFERENT for all 3 the cards.
        Goodluck!

        When the index.html file is opened, it will take the user to the home page where the user will be given
        two options: Play and Instructions. To read the rules of the game the user can select the instructions option
        which will take them to another page with the rules. If the user decides to play the game, a dropdown menu of the difficult
        levels will be opened when the play button is clicked. The user will have a choice from level 1 to 4 (4 being the most
        difficult). Additionally the user will have a choice to select the 'Computer Player' option which will allow the user to watch
        a computer player play the game of set.

        During the actual game the user will have a choice to select 'Home', 'Hint', 'Add Cards', and 'Shuffle'. The
        home button simply takes the user back to the home page while the hint button gives the user a hint. If the player deems
        there are no sets on the board they can click the add cards button to add 3 cards to the board. Lastly the shuffle
        button can be used to shuffle the board so that looking for sets can be a little easier.

---

>## Additional Features Implemented:
        1. Timer - Displays the time user took to find a set and the total play time at the end of the game.
        2. Hint generator - When the player is stumped, using the generator will show 2 cards of a set.
        3. Statistics - Gives statistics about the average set number per table and the frequency of set not appearing given
           the number of cards on the table.
        4. Modes or Levels - Four modes (Number, Number & Shape, Number & Shape & Color, Number & Shape & Color & Shading).
        5. Score - Points rewarded when the user finds a set (increases based on mode/level).
        6. Sound - Plays sound cues to help the user know whether they got the correct set.

>## Note:
        1. Images were taken from another github repo: https://github.com/nicolashahn/set-solver/tree/master/image-data/all-cards/labeled.
        2. Before clicking add cards button the user must unselect the cards else it may cause cards to not appear.