

var obj = {
        key1: value1,
        key2: value2,
};

var click = document.getElementById("mouseEvent");

document.addEventListener('click', function (mouseEvent) {
        if (mouseEvent.button === 'click') {
                console.log("Show in console")
        }
        return mouseEvent.button
} )
