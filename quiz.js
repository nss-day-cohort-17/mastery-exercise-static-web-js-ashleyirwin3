
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
        grow += ' '.repeat(height - i - 1);
        grow += character.repeat(2*i + 1) + "\n";

        final += grow;
  }

        console.log(final)
  }
  growTree.addEventListener("click", function(){
        var inputObj = {
              height: treeHeight.value,
              character: userCharacter.value
            };
            tree (inputObj);
        });


  treeHeight.addEventListener("keypress", onkeypress);
  function onkeypress(e) {
      // console.log(tree);
      var key = e.key;
      if (key === 'Enter') {
          var inputObj = {
          height: treeHeight.value,
          character: userCharacter.value
        };
        tree(inputObj);
      }
      if (treeHeight.value == "") {
        alert("Both fields must have a value");
          var inputObj = {
          height: treeHeight.value,
          character: userCharacter.value
        };
        tree(inputObj);
      }

    }


  userCharacter.addEventListener("keypress", onkeypress);
  function onkeypress(e) {
      // console.log(tree);
      var key = e.key;
      if (key === 'Enter') {
        var inputObj = {
          height: treeHeight.value,
          character: userCharacter.value
        };
        tree(inputObj);
      }
      if (userCharacter.value == "") {
        alert("Both fields must have a value");
          var inputObj = {
          height: treeHeight.value,
          character: userCharacter.value
        };
        tree(inputObj);
      }
   }
