console.log("Inside background.js, hurrray!!");



chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({url: 'new.html'});
});



let incomingURL = [];
let URLarr;
let i = 0;
let y;


const blockFunc = () => ({cancel: true});

function unBlock(){
  chrome.webRequest.onBeforeRequest.removeListener(blockFunc);
        
}

var alarmSound = new Audio();
alarmSound.src = 'alarm.mp3';


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(msg, sender, sendResponse){
    if (msg.message === "Time Over!"){
        alert(msg.message + "! Take a Break");
        console.log(msg.message + "Hurray");


        chrome.webRequest.onBeforeRequest.addListener(
      
          blockFunc,
          URLarr = {urls: ["<all_urls>"]},
          ["blocking"]
          
        );

        if(msg.brkTime == ''){
          console.log("undefined break time");
          setTimeout(unBlock,900000);
        }else{
          console.log("break time is defined");
          var unBlkTimeinMS = msg.brkTime * 60 * 1000; 
        
          setTimeout(unBlock,unBlkTimeinMS);

        }



    }else if(msg === "update"){
        console.log("update krlo");
        
  
        for(i=0; i<incomingURL.length; i++){
  
          console.log(incomingURL[i]);
        }
  
        
        chrome.webRequest.onBeforeRequest.removeListener(blockFunc);
        
  
        
  
        console.log("update krlo");
        incomingURL = [];
        i=0;
  
  
    }else if(msg.name === "Heyya"){
        
        alarmSound.play();
        console.log(msg.message);
        alert(msg.message);
    }else{
        
        incomingURL[i] = "*://" + msg + "/*" ;
        
        i++;
        console.log(i-1);
        console.log(incomingURL[i-1]);
        chrome.webRequest.onBeforeRequest.removeListener(blockFunc);
        
        
        chrome.webRequest.onBeforeRequest.addListener(
      
          blockFunc,
          URLarr = {urls: incomingURL},
          ["blocking"]
          
        );
        
        
        
        
    }
}



  
