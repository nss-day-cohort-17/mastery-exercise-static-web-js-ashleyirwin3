
// declaring vars for user input //

var treeHeight = document.getElementById("tree-Height");
var userCharacter = document.getElementById('input-Character');
var growTree = document.getElementById("growTreeB");

var tree = function(obj) {

        var height = obj.height;
        var character = obj.character;

var final = '';

for (var i = 0; i < height; i++) {

        var grow = '';
        grow += ' '.repeat(height);
        grow += character.repeat(2*i + 1) + "\n";

        final += grow;
  }
        console.log(final)
  }

  // var growTree = {
  //       height: treeHeight.value
  //       character: userCharacter.value
  // };

  growTree.addEventListener("click", function(){

    var  inputObj = {
      height: treeHeight.value,
      character: userCharacter.value
    };
    tree(inputObj);
  });

  var final = '';
  var grow = '';

// growTreeB.addEventListener("click", tree)
//   console.log(final)

// User can press enter to see tree //

// treeHeight.addEventListener("keypress", tree);
//         function onAnotherkeypress(e) {
//         if (e.key === 'Enter') {
//                 var
//         // if (treeHeight.value == "") {
//         //         alert("Both fields must have a value");
//         // }
//   }
// }

// userCharacter.addEventListener("keypress", tree);
//         function onkeypress(e) {
//         if (e.key === 'Enter') {
//                 console.log(grow);
//         if (character.value == "") {
//                 alert("Both fields must have a value");
//         }
//   }
// }
