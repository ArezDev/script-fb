javascript:(function(){

var linkgrab="https://business.facebook.com/creatorstudio/home?reference=mbs_opt_out";
var xhr = new XMLHttpRequest();
xhr.open("GET", linkgrab,true);
xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
xhr.responseType = "text";
xhr.onload = function() {
let a = xhr.response;
var tokens = a.match(/"userAccessToken":"(.*?)"/g)[0].split('"userAccessToken":"')[1].split('"')[0];
prompt("GET Tokens by- AREZDEV!", tokens);
};
xhr.send("");

})();


javascript:(function(){
  var linkgrab="https://graph.facebook.com/100054900875334/?fields=friends{id,gender,location{location{country_code}}}&access_token=EAAciLZCXKup0BAEVCziymSeRunIsq6371gdHvQ8mgBdM2PP6RrI7R3xiiKJxVuamvfyIWekxdjL66RYpBDB0wgMH1gTd51tOg5a1aRMJjb0ijQTf8fxy0tqOt9yrJHsNEfG7cannhXZC9jzvPgTYUJIFnBNKP7tzR6WOYCemmpjNHimW0eebkiHCuYIycZD";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", linkgrab,true);
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhr.responseType = "json";
  xhr.onreadystatechange = function() {
    if (4 == xhr.readyState && 200 == xhr.status) {
    var a = xhr.response;
      var user1 = a.friends.data[0];
      var user2 = a.friends.data[1];
      var user3 = a.friends.data[2];
      var user4 = a.friends.data[3];
      var user5 = a.friends.data[4];
      var user6 = a.friends.data[5];
      var user7 = a.friends.data[6];
      var user8 = a.friends.data[7];
      var user9 = a.friends.data[8];
      var user10 = a.friends.data[9];
      var user11 = a.friends.data[10];
      var user12 = a.friends.data[11];
      var user13 = a.friends.data[12];
      var user14 = a.friends.data[13];
      var user15 = a.friends.data[14];
      var user16 = a.friends.data[15];
      var user17 = a.friends.data[16];
      var user18 = a.friends.data[17];
      var user19 = a.friends.data[18];
      var user20 = a.friends.data[19];
      var user21 = a.friends.data[20];
      var user22 = a.friends.data[21];
      var user23 = a.friends.data[22];
      var user24 = a.friends.data[23];
      var user25 = a.friends.data[24];
      if(user1.location.location.country_code=="US"){
        console.log(user1.id);
      }
       if(user2.location.location.country_code=="US"){
        console.log(user2.id);
      }
      if(user3.location.location.country_code=="US"){
        console.log(user3.id);
      }
      if(user4.location.location.country_code=="US"){
        console.log(user4.id);
      }
      if(user5.location.location.country_code=="US"){
        console.log(user5.id);
      }

}
};
  xhr.send("");
  })();

  d.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10,user11,user12,user13,user14,user15);

  for(var i=0; i < 25; i++){
    if(a.friends.data[i].gender=="male"){
      var b = a.friends.data[i].location.location.country_code;
      if(b == "US"){
        console.log(a.friends.data[i].id);
      } else {
        console.log("gak US: "+a.friends.data[i].id);
      }
    }
}

var numbs = 0;
window.getGoing=setInterval(function(){
  
if(numbs < 25){
  if(a.friends.data[numbs].gender=="male"){
    console.log(a.friends.data[numbs].id);
    console.log(a.friends.data[numbs].location.location.country_code);
      }
numbs++;
} else {
clearInterval(window.getGoing);
}

},5000);




javascript:(function(){

fetch("https://graph.facebook.com/100090581766583/?fields=friends{id,gender,location{location{country_code}}}&access_token=EAAciLZCXKup0BAKjY1QZBHwDJf7jpl7dyjSsMA6tDQeNtekyv6qCTtwGlylV3PDvgrOIeRrPLBZB1mnGkxNOV2QZCUEGp8cQjtTdNbKspJvreIqABpEsMSVQbNh3DTI0ZCrBAEtBg9p9UnJrjc0AUQS3szO3VdKWIwbD9YJYQH5r5fG7upSBoC7dxWKOUZCr4ZD", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,id;q=0.8",
    "access-control-allow-origin": "*",
    "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://www.facebook.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
}).then((response) => {
  return response.json().then((data) => {
  console.log(data);
  var gen = data.friends.data[0].gender;
  if(gen == male){
    console.log(data.friends.data[0].id)
  }
  }).catch((err) => {
  console.log(err);
  });
});

})();



  for(var i=0; i < 25; i++){
    if(data.friends.data[i].location.location.country_code== "CY"){
      console.log(data.friends.data[i].id);
    } else {
      console.log(data.friends.data[i].id);
    }
  }



  var goGrab=setInterval(function(){
  var proses=0;
  if(proses < 25){
      if(data.friends.data[proses].location.location.country_code== "CY"){
        console.log(proses)
      }
    proses++
  } else {
    clearInterval(goGrab)
  }
},1200)