
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

  growTree.addEventListener("click", clickEvnt)
      function clickEvnt(e) {
      var clickB = 'click';
      if (clickB === 'click'){
      if (treeHeight.value != '' && userCharacter.value != ''){
        var inputObj = {
              height: treeHeight.value,
              character: userCharacter.value
            };
            tree (inputObj);
          }
          else {
            alert('Fields cannot be empty')
          }
         }
      };


  treeHeight.addEventListener("keypress", keyEvt);
  function keyEvt(e) {
      // console.log(tree);
      var key = e.key;
      if (key === 'Enter'){
        if(treeHeight.value != '' && userCharacter.value != ''){
          var inputObj = {
          height: treeHeight.value,
          character: userCharacter.value
          };
          tree (inputObj)
        }
        else {
          alert("Field cannot be empty")
        }
      }
  }


  userCharacter.addEventListener("keypress", keyEvt);
