let timer;  //create a box named "timer" (empty for now)

/*var buttonPosition = 0;
function addPos(){
    buttonPosition= buttonPosition+65;
    document.getElementById('')
}
*/



function hello(){
    alert('Hello from external JS!')
}

function showPopup(){ //[name]() will be used to call for this function to work.
    const popup = document.getElementById("popup")
    /*const [name] grabs the [name] and put in a box
    document is your webpage
    getElementById("element name") explains itself, also has getElementByClassName() too*/

    popup.style.display = "block"; //"block" = shows up like a normal block
    
    clearTimeout(timer); //cancel any old timer stored in "timer"

    timer = setTimeout(function(){ //starts a new timer
        
        popup.style.display = "none"; //makes the popup go bye bye

    },1500); //the number is time in miliseconds
}

DefaultColor = "White";
function DarkMode(){
    const body = document.getElementById("body");
    document.body.classList.toggle("dark");
}

function goCambridge(){
    window.open("https://dictionary.cambridge.org/","_blank");//opens cambridge in a new tab
}



function print(){
    console.log('I printed!')
}

function mouseEnter(){
    console.log('The mouse touched me!')
}

function mouseHover(){
    console.log('The mouse is molesting me!')

}

function mouseLeave(){
    console.log('The mouse left me alone!')
}