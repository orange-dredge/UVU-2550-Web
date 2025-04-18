//this is the code that valdates the webstie. it is moddled after the refrenced code given to us
//I wrote a custom check for the radio buttons as I found it easier to do it this way
//the was-valated and success-vaild classes are used to change the css of the inputs to indcate that they are vaild or not
//initValidation is ran as the web page is loaded and sets up all the events to be called when interacting with the buttons


const stateAbbreviations = [
    'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
    'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA',
    'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
    'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
    'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];
let form = null;
phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
emailRegex = /[\w]*@[\w]*.{1}(com|gov|edu|io|net){1}/;
zipCodeRegex = /(?<zip1>\d{5})([-]?(?<zip2>\d{4}))?(?<ERROR>.+)?/

function initValidation(formIdName){
    form = document.getElementById(formIdName);
    
    console.log("initValidation ran")
    let listOfInputs = document.querySelectorAll("input");
    for(let input of listOfInputs){
        input.addEventListener("change", inputCanged);
    }
    form.addEventListener("submit", submitForm);

}
function inputCanged(event){
    console.log("input Change calle event=" + event);
    let currentElelment = event.currentTarget;
    validateForm();
}
console.log("validation.js was imported so shut the fuck up")

function submitForm(event){
    console.log("submitForm was called");
    let form = event.currentTarget;


    event.preventDefault();
    event.stopPropagation();


    validateForm();


    if (!form.checkValidity()){
        //this is were you can check for if the form was validated or failed
        let inputs = document.querySelectorAll("input");
        for (let input of inputs) {
            input.classList.add("was-validated");
        }
    }else{
        //what the code does if you pass ever check
        let formInfo = document.getElementById("lofVistForm");
        let successMessage = document.getElementById("successMessage");
        formInfo.style.display = "none";
        successMessage.style.display = "block";
    }


    
}

function validateForm(){
    //this goes through ever element and calls a functiont to check its volitiy and nothing more
    console.log("ValidateForm ran");
    checkRequired("firstNameInput", "Requires Name");
    checkRequired("lastNameInput", "Requires Name");

    checkRequired("inputAddress", "Reequires Address");
    checkRequired("inputCity", "Requires City");
    checkRaido();
    if(checkRequired("inputState", "Requires State")){
        vaildSate("inputState", "Not valid state",)
    }
    if(checkRequired("inputEmail", "Email is required")){
        checkFormat("inputEmail", "Email format is bad", emailRegex);//add checkFormat function
    }
    if(checkRequired("inputZip", "Zip is required fool")){
        checkFormat("inputZip", "bad zip code", zipCodeRegex);
    }
    if(checkRequired("inputPhone", "Requires phone number")){
        checkFormat("inputPhone", "bad phone number", phoneRegex)
    }

}
function checkFormat(id, message, reggie){
    //this returns true or false depending onthe regex input into the function. my regex is called reggie
    let valid;
    let currentElelment = document.getElementById(id);
    valid = reggie.test(currentElelment.value);

    setElementValidity(id,valid, message)
    return valid
}
function vaildSate(id,msg){
    //checks if state listed is in fact a state
    console.log("vaildStat ran");
    let currentElelment = document.getElementById(id);
    let valid = false;

    for( let state of stateAbbreviations){
        if(currentElelment.value.toUpperCase() == state){
            valid = true;
        }
    }
    

    setElementValidity(id, valid, msg);
}
function checkRequired(id, message){
    //this function has become heavly limmited as I do not use check boxes or radios so it just checks if the text boxes are not empty
    console.log("CheckRequired Ran");
    let currentElelment = document.getElementById(id);
    let valid = false;
    let type = currentElelment.type;

    switch (type){
        case 'number':
        case 'text':
            console.log(currentElelment.value)
            if(currentElelment.value != ""){
                valid = true;
            }
        break;
        //note I decided to write my own check for checking the radio which is on bottom
    }

    setElementValidity(id,valid,message)
    return valid

}

function setElementValidity(id, valid, message){
    //changes the validay of the element in quesiton this is also where I change the class to check if it is valid
    console.log("setElementValidity ran");
    let currentElelment = document.getElementById(id);
    console.log(currentElelment)
    console.log(currentElelment.parentElement.parentElement)
    errorDiv = currentElelment.parentElement.parentElement.querySelector(".errorMessage");
    if(valid){
        currentElelment.setCustomValidity('');
        errorDiv.innerHTML = ""
        currentElelment.classList.add("succuces-vaild");

    }else{
        currentElelment.setCustomValidity(message);
        errorDiv.innerHTML = message
        currentElelment.classList.add("was-validated");
    }
}

function checkRaido(){
    //decided to write my own code to handle checking the radio as it was so diffrent
    console.log("checkRadio ran")
    currentElelment = document.getElementById("radioLogVist");
    raidoButtons = document.getElementsByName("howFound");
    
    let vaild = false;
    //it grabs the needed elements then loops through the radio button checking that one of them is checked
    for (let button of raidoButtons){
        console.log(button)
        if (button.checked){
            vaild = true;
        }
    }
    //if it is not checked then it adds a errorMessage
    if(!vaild){
        let errorDiv = document.getElementById("errorMessageRadio");
        errorDiv.innerHTML = "please pick one";
        currentElelment.setCustomValidity('please pick one');
        return vaild
    }
    //otherwise it removes it
    let errorDiv = document.getElementById("errorMessageRadio");
    errorDiv.innerHTML = "";
    currentElelment.setCustomValidity('');
    return vaild
}