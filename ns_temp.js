
let btn = document.getElementById('btn');
let addTask = document.getElementById('add');
let timeInput = document.querySelector('#timerAdd input');
let timerBtn = document.querySelector('#timerAdd button');
let RestartBtn;

                                

timeInput.onkeyup = ()=>{
  let timeEnteredValue = timeInput.value; //getting user entered value
  if(timeEnteredValue.trim() != 0){ //if the user value isn't only spaces
    timerBtn.classList.add("active"); //active the add button
  }else{
    timerBtn.classList.remove("active"); //unactive the add button
  }
}

btn.addEventListener("click", function(){
    var numOfMin = document.getElementById("min").value;
    var breakTime = document.getElementById("breakTime").value;
    
    console.log(numOfMin);
    console.log(breakTime);

    const strtMin = numOfMin;
    let time = strtMin * 60;

    const inputForm = document.getElementById('timerAdd');

    
        var tmp = setInterval(updateCountdown, 1000);
    
        function updateCountdown() {
            const minutes = Math.floor(time/60);
            let seconds = time % 60;
    
            seconds = seconds < 10 ? '0' + seconds : seconds;
            
            
            inputForm.innerHTML = '<span class="clock"><p>' + `${minutes}:${seconds}` + '</p></span>';
            time--;

            if(time <= 0){
                clearInterval(tmp);
                inputForm.innerHTML = '<span class="clockComp"><p id="countdown">Over!!</p><br></span>';
                chrome.runtime.sendMessage({message: "Time Over!", brkTime: breakTime});
                
            }
       }
});













/*----------------JS Code for ToDo List------------------*/








const inputBox = document.querySelector("#myDiv input");
const addBtn = document.querySelector("#myDiv #addBtn");

inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value; //getting user entered value
  if(userEnteredValue.trim() != 0){ //if the user value isn't only spaces
    addBtn.classList.add("active"); //active the add button
  }else{
    addBtn.classList.remove("active"); //unactive the add button
  }
}

// Create a "close" button and append it to each list item
var myNodelist = document.querySelectorAll("#myUL li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "closeToDo";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var closeToDo = document.getElementsByClassName("closeToDo");
var i;
for (i = 0; i < closeToDo.length; i++) {
  closeToDo[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('#myUL');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button


addBtn.addEventListener("click", function() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "closeToDo";
  span.appendChild(txt);
  li.appendChild(span);

  var closeToDo = document.getElementsByClassName("closeToDo");
  for (i = 0; i < closeToDo.length; i++) {
    closeToDo[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
});








/*--------------JS Code for BlackList URLs---------------*/





//sendBL_URLs();
//let n = 5;


const inputBoxBL = document.querySelector("#myBL input");
const addBtnBL = document.querySelector("#myBL #addBtnBL");

inputBoxBL.onkeyup = ()=>{
  let userEnteredValueBL = inputBoxBL.value; //getting user entered value
  if(userEnteredValueBL.trim() != 0){ //if the user value isn't only spaces
    addBtnBL.classList.add("active"); //active the add button
  }else{
    addBtnBL.classList.remove("active"); //unactive the add button
  }
}

// Create a "close" button and append it to each list item
var myNodelistBL = document.querySelectorAll("#myULBL li");
var i;
for (i = 0; i < myNodelistBL.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "closeBL";
  span.appendChild(txt);
  myNodelistBL[i].appendChild(span);
}

// Click on a close button to hide the current list item
var closeBL = document.getElementsByClassName("closeBL");
var i;
for (i = 0; i < closeBL.length; i++) {
  closeBL[i].onclick = function() {
    var div = this.parentElement;
    div.remove();
    div.style.display = "none";
  }
}





// Create a new list item when clicking on the "Add" button
addBtnBL.addEventListener("click", function(){
  let lengthOfList;
  var li = document.createElement("li");
  var inputValueBL = document.getElementById("myInputBL").value;


  var t = document.createTextNode(inputValueBL);
  li.appendChild(t);
  if (inputValueBL === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myULBL").appendChild(li);
    console.log(inputValueBL);
    //n++;
    //sendBL_URLs_AfterAdd();
    
  }

  //let listElt = document.querySelectorAll("#myULBL li");
  //lengthOfList = listElt.length;

  

  document.getElementById("myInputBL").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "closeBL";
  span.appendChild(txt);
  li.appendChild(span);

  var closeBL = document.getElementsByClassName("closeBL");

  for (i = 0; i < closeBL.length; i++) {
    closeBL[i].onclick = function() {
      var div = this.parentElement;
      
      div.remove();
    }
  }
});


//for(var i = 0; i<n; i++){
  
//}

let BL_btn = document.querySelector(".blURL button");
//console.log(BL_btn);

//chrome.runtime.sendMessage("button Clicked");

BL_btn.onclick = function(){

  let listEltSpan = document.querySelectorAll("#myULBL li span");
  for(var i=0; i< listEltSpan.length; i++){
    listEltSpan[i].remove();
  }

  let listElt = document.querySelectorAll("#myULBL li");
  
  chrome.runtime.sendMessage("update");

  for(var i=0; i< listElt.length; i++){
    console.log(listElt[i].innerHTML);
    //var port = chrome.runtime.connect({name: "hello"});
    chrome.runtime.sendMessage(listElt[i].innerHTML);
  }

  // Create a "close" button and append it to each list item
  var myNodelistBL = document.querySelectorAll("#myULBL li");
  var i;
  for (i = 0; i < myNodelistBL.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "closeBL";
    span.appendChild(txt);
    myNodelistBL[i].appendChild(span);
  }

  // Click on a close button to hide the current list item
  var closeBL = document.getElementsByClassName("closeBL");
  var i;
  for (i = 0; i < closeBL.length; i++) {
    closeBL[i].onclick = function() {
      var div = this.parentElement;
      div.remove();
      div.style.display = "none";
    }
  }


}




function sendBL_URLs(){
  //var inputValueBL = document.getElementById("myInputBL").value;
  
  let listElt = document.querySelectorAll("#myULBL li");
  for(var i=0; i< listElt.length; i++){
    console.log(listElt[i].innerHTML);
    chrome.runtime.sendMessage(listElt[i].innerHTML);
  }
    
}










/*----------------JS Code for Alarm------------------*/

const setAlarmBtn = document.querySelector("#setAlarmButton");
const cancelAlarmBtn = document.querySelector("#cancelAlarmButton");

//var alarmSound = new Audio();
//alarmSound.src = 'alarm.mp3';


function initAlarm() {
  setAlarmBtn.classList.remove("inactive");
  cancelAlarmBtn.classList.remove("active");

  //alarmSound.play();
  //setTimeout(alarmSound.pause(), 10000);


  let msg = document.getElementById("alarmNotif").value;
  console.log(msg);
  
  chrome.runtime.sendMessage({name: "Heyya", message: msg});
  
};

var alarmTimer;

setAlarmBtn.onclick = function (){
  

  var ms = document.getElementById('alarmTime').valueAsNumber;
  if(isNaN(ms)) {
    alert('Invalid Date');
    return;
  }

  var alarm = new Date(ms);
  var alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(),  alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());
  
  var differenceInMs = alarmTime.getTime() - (new Date()).getTime();

  if(differenceInMs < 0) {
    alert('Specified time is already passed');
    return;
  }else{
    setAlarmBtn.classList.add("inactive");
    cancelAlarmBtn.classList.add("active");
  }

  alarmTimer = setTimeout(initAlarm, differenceInMs);
};

cancelAlarmBtn.onclick = function (){
  setAlarmBtn.classList.remove("inactive");
  cancelAlarmBtn.classList.remove("active");

  clearTimeout(alarmTimer);
};



