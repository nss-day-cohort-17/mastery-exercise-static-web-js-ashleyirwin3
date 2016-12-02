
// declaring vars for user input //

var treeHeight = document.getElementById('inputHeight');
var character = document.getElementById('inputCharacter');

var obj = {
        treeHeight: inputHeight,
        character: inputCharacter,
};


// button element //

var click = document.getElementById("mouseEvent");

document.addEventListener('click', function (mouseEvent) {
        if (mouseEvent.button. === 'click') {
                console.log("clicking")
        }
        return mouseEvent
} )

mouseEvent.innerHTML = click

// user can press enter to see tree //

var enter = document.getElementById("keyPress")

var enter = addEventListener('enter', function (keypress) {
        if (keypress === 'enter') {
                console.log(tree)
        }
        }
        return keypress
} )

keyPress.innerHTML = tree

// document.addEventListener('click', function (mouseEvent) {
//   console.log("clicking")
// })  ---this goes in the console to get the tree to show up the the console when the button is pushed
