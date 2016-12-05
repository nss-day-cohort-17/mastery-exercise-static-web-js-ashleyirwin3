
// declaring vars for user input //

var treeHeight = document.getElementById("tree-Height");
var character = document.getElementById('input-Character');
var growTree = document.getElementById("grow-Tree");

var tree =  {
        height: 0,
        character: ""
};

// Begin writing function to grow tree //

// Grow your tree event listener function //
growTree.addEventListener('click', function() {
        console.log("grow");
        })




// User can press enter to see tree //

treeHeight.addEventListener("keypress", onkeypress);
        function onkeypress(e) {
        if (e.key === 'Enter') {
                console.log("you pressed enter");
                console.log(treeHeight.value);
                }
        };


// character.addEventListener("keypress", onkeypress);
//         function onkeypress(e) {
//                 console.log(e)
//                 var keypressed = e.keypressed;
//                 if (keypressed === 'Enter') {
//                 }
//         };


// treeHeight.innerHTML = tree-Height
// charcter.innerHTML = inputCharacter



// document.addEventListener('click', function (mouseEvent) {
//   console.log("clicking")
// })  ---this goes in the console to get the tree to show up the the console when the button is pushed
