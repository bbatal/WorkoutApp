
//generateMockEvents(5);

const containerHeight = 720;
const containerWidth = 600;
const minutesinDay = 60 * 12;
let collisions = [];
let width = [];
let leftOffSet = [];

// append one event to calendar
/*var createEvent = (height, top, left, units) => {

  
  let dropItem = document.getElementById("top1");
  node.className = "event";



  // Customized CSS to position each event
  dropItem.style.width = (containerWidth/units) + "px";
  dropItem.style.height = height + "px";
  dropItem.style.top = top + "px";
  dropItem.style.left = 100 + left + "px";

  document.getElementById("events").appendChild(dropItem);
}

createEvent(73, 0, -100, 2);
createEvent(73, 70, -100, 2);
createEvent(73, 140, -100, 2);
createEvent(73, 210, -100, 2);
createEvent(73, 280, -100, 2);
createEvent(73, 350, -100, 2);
createEvent(73, 420, -100, 2);

// creating multiple divs for drag and drop
/*var createList = (height, top, left, units) => {


  var box = document.createElement("div");
  box.style.width = "100px";
  box.style.height = "100px";
  box.style.background = "red";
  box.style.color = "white";
  box.innerHTML = "Hello";

  document.getElementById("main").appendChild(box);
};

createList(100, 0 , -100, 1);
*/





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
    }