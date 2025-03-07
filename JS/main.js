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
        mainText[0].textContent = "Red Page";
        mainText[1].textContent = "";
        mainText[2].textContent = "";
        mainImg.src = "Img/RedMana.png";
    }
    if(page == 'white'){
        mainText[0].textContent = "White Page";
        mainText[1].textContent = "";
        mainText[2].textContent = "";
        mainImg.src = "Img/WhiteMana.png";
    }
    if(page == 'green'){
        mainText[0].textContent = "green Page";
        mainText[1].textContent = "";
        mainText[2].textContent = "";
        mainImg.src = "Img/GreenMana.png";
    }
    if(page == 'black'){
        mainText[0].textContent = "black Page";
        mainText[1].textContent = "";
        mainText[2].textContent = "";
        mainImg.src = "Img/BlackMana.png";
    }if(page == 'blue'){
        mainText[0].textContent = "blue page";
        mainText[1].textContent = "";
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