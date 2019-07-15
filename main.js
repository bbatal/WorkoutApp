
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
    makeGoAway(theData);
    
    }


    function makeGoAway(theData) {
      
      if (theData == "pic1") {
      var dis1 = document.querySelector("#place1");
      dis1.style.visibility = "hidden";
    } else if (theData == "pic2") {
      var dis2 = document.querySelector("#place2");
      dis2.style.visibility = "hidden";
    } else if (theData == "pic3") {
      var dis3 = document.querySelector("#place3");
      dis3.style.visibility = "hidden";
    } else if (theData == "pic4") {
      var dis4 = document.querySelector("#place4");
      dis4.style.visibility = "hidden";
    } else if (theData == "pic5") {
      var dis5 = document.querySelector("#place5");
      dis5.style.visibility = "hidden";
    } else if (theData == "pic6") {
      var dis6 = document.querySelector("#place6");
      dis6.style.visibility = "hidden";
    }else if (theData == "pic7") {
      var dis6 = document.querySelector("#place7");
      dis6.style.visibility = "hidden";
    }else if (theData == "pic8") {
      var dis6 = document.querySelector("#place8");
      dis6.style.visibility = "hidden";
    }else if (theData == "pic9") {
      var dis6 = document.querySelector("#place9");
      dis6.style.visibility = "hidden";
    }else if (theData == "pic10") {
      var dis6 = document.querySelector("#place10");
      dis6.style.visibility = "hidden";
    }else if (theData == "pic11") {
      var dis6 = document.querySelector("#place11");
      dis6.style.visibility = "hidden";
    }else if (theData == "pic12") {
      var dis6 = document.querySelector("#place12");
      dis6.style.visibility = "hidden";
    }else if (theData == "pic13") {
      var dis6 = document.querySelector("#place13");
      dis6.style.visibility = "hidden";
    }else if (theData == "pic14") {
      var dis6 = document.querySelector("#place14");
      dis6.style.visibility = "hidden";
    }else if (theData == "pic15") {
      var dis6 = document.querySelector("#place15");
      dis6.style.visibility = "hidden";
    }else if (theData == "pic16") {
      var dis6 = document.querySelector("#place16");
      dis6.style.visibility = "hidden";
    }else if (theData == "pic17") {
      var dis6 = document.querySelector("#place17");
      dis6.style.visibility = "hidden";
    }else if (theData == "pic18") {
      var dis6 = document.querySelector("#place18");
      dis6.style.visibility = "hidden";
    }else if (theData == "pic19") {
      var dis6 = document.querySelector("#place19");
      dis6.style.visibility = "hidden";
    }else if (theData == "pic20") {
      var dis6 = document.querySelector("#place20");
      dis6.style.visibility = "hidden";
    }else if (theData == "pic21") {
      var dis6 = document.querySelector("#place21");
      dis6.style.visibility = "hidden";
    }else if (theData == "pic22") {
      var dis6 = document.querySelector("#place22");
      dis6.style.visibility = "hidden";
    }else if (theData == "pic23") {
      var dis6 = document.querySelector("#place23");
      dis6.style.visibility = "hidden";
    }else if (theData == "pic24") {
      var dis6 = document.querySelector("#place24");
      dis6.style.visibility = "hidden";
    }else if (theData == "pic25") {
      var dis6 = document.querySelector("#place25");
      dis6.style.visibility = "hidden";
    }
  };