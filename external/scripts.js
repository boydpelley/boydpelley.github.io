/*
    palettes to use

    palette 1
    #F2EFE9 (off-white; used throughout the whole site for font)
    #333333 (grey)
    #A60303 (dark red; div backgrounds, etc)
    #E72219 (vibrant red; photo borders)
    

    palette 2
    #F2EFE9 (off-white)
    #293B8C (blue; can use for headers/footers/divs)
    #2C4019 (darker forest green; can use for photo borders)
    #0F1226 (dark blue; can use for background)

    palette 3
    #F2EFE9 (off-white)
    #333333 (grey)
    #1C324A (dark blue)
    #91E0F2 (light blue, use for photo borders)
    

*/

let palette1 = document.querySelector("#setPalette1");
let palette2 = document.querySelector("#setPalette2");
let palette3 = document.querySelector("#setPalette3");

palette1.addEventListener("click", setPalette1);
palette2.addEventListener("click", setPalette2);
palette3.addEventListener("click", setPalette3);


// These funcitons change the colors of each variable
function setPalette1() {
    document.documentElement.style.setProperty("--main-background", "#333333");
    document.documentElement.style.setProperty("--border-c", "#E72219");
    document.documentElement.style.setProperty("--div-background", "#A60303");
}

function setPalette2() {
    document.documentElement.style.setProperty("--main-background", "#293B8C");
    document.documentElement.style.setProperty("--border-c", "#2C4019");
    document.documentElement.style.setProperty("--div-background", "#0F1226");
}

function setPalette3() {
    document.documentElement.style.setProperty("--main-background", "#333333");
    document.documentElement.style.setProperty("--border-c", "#91E0F2");
    document.documentElement.style.setProperty("--div-background", "#1C324A");
}

/*  
    This section is to make it so that only one audio element can be playing sounds at once. Each time an audio element is clicked, 
    it will pause all other elements
*/
// Make names for each audio element
let dejaAudio = document.getElementById("deja");
let outtaAudio = document.getElementById("outta");
let bpAudio = document.getElementById("bp");
let hurtsAudio = document.getElementById("hurts");

// Put these elements into an array, pausing every element in the array that's NOT the current index being accessed
let arrayAudio = [dejaAudio, outtaAudio, bpAudio, hurtsAudio];

// This function iterates through the array of audio elements and pauses every element that is not the current one being accessed
function pauseAll(audios, audioPlaying) {
    for(let i = 0; i < audios.length; i++) {
        if(audioPlaying != audios[i]) {
            audios[i].pause();
        }
    }
}

// Have a check that basically makes it so that if dejaAudio (would also work with any other audio element) is null, this wont try to execute;
// throws an error that states "Uncaught TypeError: cannot read properities of null". This means if the element doesn't exist, it won't run!
if(dejaAudio != null) {
    // Access the applicable funcitons for each song
    dejaAudio.addEventListener("play", function() {
        pauseAll(arrayAudio, dejaAudio);
    });
    outtaAudio.addEventListener("play", function() {
        pauseAll(arrayAudio, outtaAudio);
    });
    bpAudio.addEventListener("play", function() {
        pauseAll(arrayAudio, bpAudio);
    });
    hurtsAudio.addEventListener("play", function() {
        pauseAll(arrayAudio, hurtsAudio);
    });
}

/*
    Here is where the form on the "socials" page will be modified
*/
    let isNameValid = false;
    let nameBox = document.getElementById("first-last-name");
// Same reason as the code above, it throws a null error, so I wrapped the code in this if statement
if (nameBox != null){
    nameBox.addEventListener("input", isValidName);

    // Iterates through name in the input box and returns false if the name contains any invalid characters
    function isValidName() {
        let invalidCharacters = "!@#$%^&*()_+=:;{}[]|<>";
        let name = nameBox.value;

        for (let i = 0; i < name.length; i++) {
            for (let j = 0; j < invalidCharacters.length; j++) {
                if (name[i] == invalidCharacters[j]) {
                    return isNameValid = false;
                    
                }
            }
        }
        return isNameValid = true;
    }

    let nameForEmpty = document.getElementById("first-last-name");
    nameForEmpty.addEventListener("input", nameEmpty);
    let isNameBoxFilled = false;

    // Checks to see if the name box is empty and returns false if it is
    function nameEmpty() {
        let name = nameForEmpty.value;

        if (name == "" || name == null) {
            return isNameBoxFilled = false;
        }
        return isNameBoxFilled = true;
    }

    let textareaBox = document.getElementById("comment");
    textareaBox.addEventListener("input", textareaFilled);
    let isTextareaFilled = false;

    function textareaFilled() {
        let text = textareaBox.value;

        if(text == "" ||text == null) {
            return isTextareaFilled = false;
        }
        return isTextareaFilled = true;
    }

    let formToCheck = document.getElementById("feedback");
    formToCheck.addEventListener("submit", meetsCriteria);

    function meetsCriteria(event) {
        if (isNameValid == false) {
            window.alert("Name Invalid!");
            nameBox.style.backgroundColor = "#E72219";
            event.preventDefault();
        }
        if(isNameBoxFilled == false) {
            window.alert("Please fill out name field");
            nameBox.style.backgroundColor = "#E72219";
            event.preventDefault();
        }
        if(isTextareaFilled == false) {
            window.alert("Please fill out comment field");
            textareaBox.style.backgroundColor = "#E72219";
            event.preventDefault();
        }

    }
}


let instagramLink = document.getElementById("insta-link");

// Doesn't try to run if the element doesn't exist on the page the user is currently on
if (instagramLink != null) {
    let confirmGo = function(event) {
        if(!window.confirm("Would you like to see a popup window?")) {
            event.preventDefault();
        };
    };

    instagramLink.addEventListener("click", confirmGo);
}