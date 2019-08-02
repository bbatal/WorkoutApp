
//generateMockEvents(5);
// 1 min == 6px;
/*const containerHeight = 720;
const containerWidth = 600;
const minutesinDay = 60 * 12;
let collisions = [];
let width = [];
let leftOffSet = [];*/
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
  
      
   /*   if (theData == "pic1") {
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
    }*/
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


   /* var div1 = document.createElement("div");
    div1.style.backgroundColor = "white";
    div1.style.margin = "2.5px";
    div1.style.padding = "2.5px";
    div1.style.height = "80px";
    div1.style.width = "180px";
    div1.innerText = formObj.name + " " + formObj.time;
    
    document.getElementsByClassName("calendar")[1].appendChild(div1);

    var div2 = document.createElement("div");
    div2.style.backgroundColor = "white";
    div2.style.margin = "2.5px";
    div2.style.padding = "2.5px";
    div2.style.height = "80px";
    div2.style.width = "180px";
    div2.innerText = formObj.name + " " + formObj.time;
    
    document.getElementsByClassName("calendar")[2].appendChild(div2);

    var div3 = document.createElement("div");
    div3.style.backgroundColor = "white";
    div3.style.margin = "2.5px";
    div3.style.padding = "2.5px";
    div3.style.height = "80px";
    div3.style.width = "180px";
    div3.innerText = formObj.name + " " + formObj.time;
    
    document.getElementsByClassName("calendar")[3].appendChild(div3);

    var div4 = document.createElement("div");
    div4.style.backgroundColor = "white";
    div4.style.margin = "2.5px";
    div4.style.padding = "2.5px";
    div4.style.height = "80px";
    div4.style.width = "180px";
    div4.innerText = formObj.name + " " + formObj.time;
    
    document.getElementsByClassName("calendar")[4].appendChild(div4);

    var div5 = document.createElement("div");
    div5.style.backgroundColor = "white";
    div5.style.margin = "2.5px";
    div5.style.padding = "2.5px";
    div5.style.height = "80px";
    div5.style.width = "180px";
    div5.innerText = formObj.name + " " + formObj.time;
    
    document.getElementsByClassName("calendar")[5].appendChild(div5);

    var div6 = document.createElement("div");
    div6.style.backgroundColor = "white";
    div6.style.margin = "2.5px";
    div6.style.padding = "2.5px";
    div6.style.height = "80px";
    div6.style.width = "180px";
    div6.innerText = formObj.name + " " + formObj.time;
    
    document.getElementsByClassName("calendar")[6].appendChild(div6);
   */

    // if (result === "10 min") {
    //   let placement = document.getElementById("events1");
    //   placement.innerText = result + " " + result1;
    // } else if (result === "20 min") {
    //   let placement = document.getElementById("events1");
    //   let placement1 = document.getElementById("events2");
    //   placement1.innerText = result + "" + result1;
    //   placement.innerText = result + "" + result1;
    // } else if (result === "30 min") {
    //   let placement = document.getElementById("events1");
    //   let placement1 = document.getElementById("events2");
    //   let placement2 = document.getElementById("events3");
    //   placement.innerText = result + "" + result1;
    //   placement1.innerText = result + "" + result1;
    //   placement2.innerText = result + "" + result1;
    // } else if (result === "40 min") {
    //   let placement = document.getElementById("events1");
    //   let placement1 = document.getElementById("events2");
    //   let placement2 = document.getElementById("events3");
    //   let placement3 = document.getElementById("events4");
    //   placement.innerText = result + "" + result1;
    //   placement1.innerText = result + "" + result1;
    //   placement2.innerText = result + "" + result1;
    //   placement3.innerText = result + "" + result1;

    // } else if (result === "50 min") {
    //   let placement = document.getElementById("events1");
    //   let placement1 = document.getElementById("events2");
    //   let placement2 = document.getElementById("events3");
    //   let placement3 = document.getElementById("events4");
    //   let placement4 = document.getElementById("events5");
    //   placement.innerText = result + "" + result1;
    //   placement1.innerText = result + "" + result1;
    //   placement2.innerText = result + "" + result1;
    //   placement3.innerText = result + "" + result1;
    //   placement4.innerText = result + "" + result1;

    // } else if (result === "60 min") {
    //   let placement = document.getElementById("events1");
    //   let placement1 = document.getElementById("events2");
    //   let placement2 = document.getElementById("events3");
    //   let placement3 = document.getElementById("events4");
    //   let placement4 = document.getElementById("events5");
    //   let placement5 = document.getElementById("events6");
    //   placement.innerText = result + "" + result1;
    //   placement1.innerText = result + "" + result1;
    //   placement2.innerText = result + "" + result1;
    //   placement3.innerText = result + "" + result1;
    //   placement4.innerText = result + "" + result1;
    //   placement5.innerText = result + "" + result1;

    //};

    
    
    
};






//try append child