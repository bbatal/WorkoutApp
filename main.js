
//generateMockEvents(5);

/*const containerHeight = 720;
const containerWidth = 600;
const minutesinDay = 60 * 12;
let collisions = [];
let width = [];
let leftOffSet = [];*/

// functionality for drag/drop events
function dragIt(theEvent) {
  //tell the browser what to drag
  theEvent.dataTransfer.setData("Text", theEvent.target.id);
  }

  function dropIt(theEvent) {
    //get a reference to the element being dragged
    var theData = theEvent.dataTransfer.getData("Text");
    //get the element
    var theDraggedElement = document.getElementById(theData);
    //add it to the drop element
    theEvent.target.appendChild(theDraggedElement);
    //instruct the browser to allow the drop
    theEvent.preventDefault();
    makeGoAway();
    
    }


    function makeGoAway() {
      if ((("id").value == "#pic1")){
      var dis = document.querySelector("#place1");
      dis.style.visibility = "hidden";
    } else if (("#pic2")) {
      var dis1 = document.querySelector("#place2");
      dis1.style.visibility = "hidden";
    }
  };