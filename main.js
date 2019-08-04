
var workoutList = [];
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
    makeGoAway(theData);
    
    }


    function makeGoAway(theData) {

      var h = theData.slice(3);
      var p = parseInt(h); // turn string into usable number

      var d = document.querySelector("#place" + p);
      d.style.visibility = "hidden";
  };


  function testSelect (form) {
    var item = form.workoutDuration.selectedIndex;
    var result = form.workoutDuration.options[item].text;
    
    var testVar = form.workoutType.selectedIndex;
    var result1 = form.workoutType.options[testVar].text;

    var day = form.dayOfTheWeek.selectedIndex;

    var formObj = {time: result, name: result1};
    workoutList.push(formObj);

  
  
    var div0 = document.createElement("div");
    div0.style.backgroundColor = "white";
    div0.style.margin = "2.5px";
    div0.style.padding = "2.5px";
    div0.style.height = "80px";
    div0.style.width = "180px";
    div0.innerText = formObj.name + " " + formObj.time;
    
    document.getElementsByClassName("calendar")[day].appendChild(div0);
};

function makeSpans (n) {
  var times = 0;
  for (var i = 0; i < 25; i++) {
    var x = document.getElementsByClassName("timings")[n];
    var spans = document.createElement("span");
    spans.innerHTML = times + " Min";
    x.appendChild(spans);
    times += 5;
  }

};

makeSpans(0);
makeSpans(1);
makeSpans(2);
makeSpans(3);
makeSpans(4);
makeSpans(5);
makeSpans(6);

function divMaker (n) {    // makes divs for image columns
  for (var t = 0; t < 5; t++) {
  var div1 = document.createElement("div");
  var imgs = document.createElement("img");
  imgs.setAttribute("src", "images/snare.png");
  imgs.setAttribute("width", "150px");
  imgs.setAttribute("height", "55px");
  imgs.setAttribute("draggable", "true");

  div1.id = "place" + t;
  div1.appendChild(imgs);
  document.getElementsByClassName("container1")[n].appendChild(div1);
  }
};

divMaker(0);
divMaker(1);
divMaker(2);
divMaker(3);
divMaker(4);