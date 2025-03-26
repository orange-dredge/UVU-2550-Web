altLayout = false
//<link rel="stylesheet" href="Css/SyleSheetDarkMode.css" id="darkModeStyleSheet">
function toggleSytleSheet(){
    currentStyleSheet = document.getElementById("currentSyleSheet");
    if (altLayout == false){
        console.log("seting to dark mode");
        //head = document.querySelector("head");
        StyleSheetLink = document.createElement("link");
        StyleSheetLink.href = "Css/SyleSheetDarkMode.css";
        StyleSheetLink.id = "darkModeStyleSheet"
        StyleSheetLink.rel = "stylesheet"
        altLayout = true;
        //currentStyleSheet.remove();
        document.head.appendChild(StyleSheetLink);
        //currentStyleSheet.href = "Css/SyleSheetDarkMode.css";
    }else{
        darkmode = document.getElementById("darkModeStyleSheet");
        darkmode.remove();
        altLayout = false;
        console.log("switching to normal")
        //currentStyleSheet.href = "Css/styleSheet.css";
    }
}








function swapLayout(page){
    var mainImg = document.getElementById("mainImage");
    var mainText = document.getElementsByClassName("mainText");

    var contact = document.getElementById("contactInfo")
    var  caption = document.getElementById("caption");

    var video = document.getElementById("embedded-video");
    var mainImageBox = document.getElementById("main-image-container");
    var mainTextBox = document.getElementById("main-body-text");
    video.style.display = "none";
    mainImageBox.style.display = "flex";
    mainTextBox.style.display = "block";
    caption.style.display = "none";
    contact.style.display = "none";
    
    console.log("page should be = to : " + page);
    if(page == 'main'){
        caption.style.display = "block";
        mainImg.src = "Img/MM20161114_Wheel.png";
        mainText[0].textContent = "Magic the Gathering is Split into deferring colors. Each of the colors is different in mechanics and ideology. This helps keep diversity in the game and split up mechanics in a way that adds depth. Each color has its strengths and weaknesses and interacts with the game pieces in a slightly different way. Magic uses colors to describe and add to characters. The colors themselves have associated beliefs and ideologies. This takes the effect of character traits being associated with a particular color. ";
        mainText[1].textContent = "Then when you combine multiple colors you can describe characters or people that could also feed into how the card is played and used. When combining colors there are a few key notes. This allows one color to make up for its weaknesses with others' strengths. It also intermixes the beliefs and ideologies of the colors. When combining ideologies might take more priority than another if they conflict with the core idea but both will still be present.";
        mainText[2].textContent = "The colors each have two ally color pairs and two enemy color pairs. You can see this with the image on the left. The two closes colors are ally color pairs and the two further away are enemy color pairs. Ally color pairs normally do not conflict in their ideologies but enemy color pairs do. For example black is allies with red and blue, but enemies with white and green. You can click or tap on the Navigation on top to read about each color.";
    }if(page == 'red'){
        mainText[0].textContent = "Red is the color of freedom, emotion, and chaos. It is largely impulsive and embraces speed. There is no more to say about the philosophy of red as it is quick and to the point.";
        mainText[1].textContent = "Red gameplay largely focused on speed and aggression. It is chaotic and fast to make decisions. It has fast creatures and is able to deal with creatures with burn spells(spells that deal direct damage). The weakness of red is that it quickly runs out of gas. If you can make a game against red go long they are likely to lose after they lose steam.";
        mainText[2].textContent = "";
        mainImg.src = "Img/RedMana.png";
    }
    if(page == 'white'){
        mainText[0].textContent = "White is all about structure and teamwork. It believes in the good of the group over the good of the individual. It values law structure and fairness. While no color is seen as good or bad white is commonly portrayed as having selfless individuals. It also has it as possibly evil in that it can undermind individuality in favor of what it might see as a greater good. ";
        mainText[1].textContent = "Reflecting its philosophy white enjoys a large amount of creatures(characters) on the board state and is amazing at building an army. It then has ways to easily buff its army. It also is good at gaining life. The thing that sets it apart the most is that it is also able to remove any card type. Most other colors specify in removing particular card types but white can do it all. White does struggle to draw cards and struggles to have powerful creatures at higher mana cost";
        mainText[2].textContent = "";
        mainImg.src = "Img/WhiteMana.png";
    }
    if(page == 'green'){
        mainText[0].textContent = "Green is the color of nature. It lives on instinct and focuses on harmony and strength. It values life and resilience. All life is valued by green. Insects plants trees are all important and part of life. It opposes ideas of science and rejects research and knowledge in favor of instincts. It lives a little in the past but values life in its natural state.";
        mainText[1].textContent = "In terms of gameplay green is creature focused. It is all about playing the biggest thing on the board and ramming your face with it. It can quickly buff the strength of its creatures and plays efficient threats. It is also amazing at destroying artifacts and enchantment. But on that note, it sucks at dealing with creature removal and instead seeks to dominate the board state with larger creatures";
        mainText[2].textContent = "";
        mainImg.src = "Img/GreenMana.png";
    }
    if(page == 'black'){
        mainText[0].textContent = "Black is the color of ambition and seeking power at any cost. Black is self-interested and willing to do whatever it takes to achieve its goals. While not inherently bad black can easily be seen as such if a person's ambitions are not seen as good. If a black individual sees family as important it would sacrifice everything for it’s family. If they see power as most important they would be willing to sacrifice everything to become more powerful. ";
        mainText[1].textContent = "Black is very good at killing things in the game. It has a nack at removing creatures and to that front black is amazing. It also has machanics that commonly sacrifices heath or other resources in order to gain something. For example, it is common for blacks to sacrifice life to draw more cards. It also sees nothing a sacred and is willing to reanimate creatures and will commonly use the graveyard.";
        mainText[2].textContent = "";
        mainImg.src = "Img/BlackMana.png";
    }if(page == 'blue'){
        mainText[0].textContent = "Blue is focused on intellect and knowledge. It is amazing at controlling and manipulating others. The pursuit of knowledge comes first and foremost to Blue. It rejects nature in favor of scientific progress. Blue is normally seen as neither good nor bad in any way. Intellect and knowledge can be used to progress the world forward. Or one can forget about helping and see progressing in knowledge as a means and the end undermining what it could be used for.";
        mainText[1].textContent = "In terms of gameplay blue commonly uses what are called counterspells. These are used to stop any card in its tracks. Because of this Blue mostly plays reactionary. It will wait for the opponent to act first. Blue is also known for its ability to draw cards and commonly uses cards to send cards back to the player's hands. Blue does struggle to deal with a problem once it has passed. It also is slow to start and can be overwhelmed very easily";
        mainText[2].textContent = "";
        mainImg.src = "Img/BlueMana.png";
    }if(page == 'video'){
        video.style.display = "block";
        mainImageBox.style.display = "none";
        mainTextBox.style.display = "none";
    }
    if(page == 'contact'){
        mainImageBox.style.display = "none";
        mainTextBox.style.display = "none";
        contact.style.display = "block";
        
    }
}