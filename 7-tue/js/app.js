'use strict';


function salmonCookieShop(location, minCustomerPerHr, maxCustomerPerHr, aveCookiePerCust, totalCookies){
  this.hours = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm"],
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.location = location;
  this.minCustomerPerHr = minCustomerPerHr;
  this.maxCustomerPerHr = maxCustomerPerHr;
  this.aveCookiePerCust = aveCookiePerCust;
  this.totalCookies = 0;

//cutomers per hour in array
  for(var i=0; i < this.hours.length; i++){
    var rand = Math.floor(Math.random() * 65);
    this.customersPerHour.push(rand);
  }
//average cookies per hour in array
  for(var i= 0; i < this.hours.length;i++) {
    var count = Math.floor(this.aveCookiePerCust * this.customersPerHour[i]);
    this.cookiesPerHour.push(count);
  };
//append cookies per hour to table
  for(var i=0; i < this.hours.length; i++){
    var node = document.createElement("td");
    var textnode = document.createTextNode(this.cookiesPerHour[i]);
    node.appendChild(textnode);
    document.getElementById(this.location).appendChild(node)
  }
//get total cookies
  for(var i=0;i<this.hours.length;i++){
    this.totalCookies = this.totalCookies + this.cookiesPerHour[i];
    console.log(this.totalCookies);
  }
//append total cookies
  var node = document.createElement("td");
  var textnode = document.createTextNode(this.totalCookies);
  node.appendChild(textnode);
  document.getElementById(this.location).appendChild(node)

}


var something1  = new salmonCookieShop("1st and Pike",23,65,6.3);
var something2  = new salmonCookieShop("SeaTac",23,65,6.3);
var something3  = new salmonCookieShop("Seattle Center",23,65,6.3);
var something4  = new salmonCookieShop("Capitol Hill",23,65,6.3);
var something5  = new salmonCookieShop("Alki",23,65,6.3);

// this.custPerHr = function() {

// salmonCookieShop.prototype.cookiesPerHr = function() {
//
// salmonCookieShop.prototype.appendData = function() {

// salmonCookieShop.prototype.appendTotal = function(){
// function salmonCookieShop(location, minCustomerPerHr, maxCustomerPerHr, aveCookiePerCust, totalCookies){






// var cookieShop = {
//   location: "1st and Pike",
//   hours: ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm"],
//   customerPerHour: [],
//   cookiesPerHour: [],
//   minCustomerPerHr: 23,
//   maxCustomerPerHr: 65,
//   aveCookiePerCust: 6.3,
//   totalCookies: 0,
//   //adds customer to arry
//     custPerHr: function() {
//       for(var i=0; i < this.hours.length; i++){
//         var rand = Math.floor(Math.random() * 65);
//         this.customerPerHour.push(rand);
//       }
//     },
//     //adds cookies to arry
//     cookiesPerHr: function() {
//       for(var i= 0; i < this.hours.length;i++) {
//         var count = Math.floor(this.customerPerHour[i]*this.aveCookiePerCust);
//         this.cookiesPerHour.push(count);
//       }
//     },
//     appendData:function() {
//       for(var i=0; i < cookieShop.hours.length; i++){
//
//         var randCookie = cookieShop.cookiesPerHr[i] * Math.random()*7;
//         var node = document.createElement("td");
//         var textnode = document.createTextNode(this.cookiesPerHour[i]);
//         node.appendChild(textnode);
//         document.getElementById("1st").appendChild(node)
//
//       }
//     },
//     appendTotal: function(){
//       for(var i=0;i<cookieShop.hours.length;i++){
//         cookieShop.totalCookies = cookieShop.totalCookies + cookieShop.cookiesPerHour[i];
//       }
//       var node = document.createElement("td");
//       var textnode = document.createTextNode(cookieShop.totalCookies);
//       node.appendChild(textnode);
//       document.getElementById("1st").appendChild(node)
//     }
//   }


//adds max amout of cookies per hour to arry
// projectedMaxCookies2: function(){
//   for(var i= 0; i < this.hours.length;i++) {
//     var projectedCookiesperHr3 = Math.floor(this.aveCookiePerCust*this.maxCustomerPerHr);
//     this.projectedCookiesPerHour1.push(this.projectedCookiesperHr3);






// for(var i=0; i < cookieShop.hours.length; i++){
// var node = document.createElement("LI");
// var textnode = document.createTextNode(cookieShop.hours[i] + ": " + cookieShop.cookiesPerHour[i] + " cookies");
// node.appendChild(textnode);
// document.getElementById("seatacCookies").appendChild(node)
// }


// var cookieShop = {
//   location: "SeaTac",
//   hours: ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm"],
//   customerPerHour: [],
//   cookiesPerHour: [],
//   minCustomerPerHr: 3,
//   maxCustomerPerHr: 24,
//   aveCookiePerCust: 1.2,
//   var projectedCookies = aveCookiePerCust*maxCustomerPerHr;
//   totalCookies: 0,
//   custPerHr: function() {
//     for(var i=0; i < this.hours.length; i++){
//       var rand = Math.floor(Math.random() * 65);
//       this.customerPerHour.push(rand);
//     }
//     console.log(this.customerPerHour);
//   },
//   cookiesPerHr: function() {
//     for(var i= 0; i < this.hours.length;i++) {
//       var count = Math.floor(this.customerPerHour[i]*this.aveCookiePerCust);
//       this.cookiesPerHour.push(count);
//     }
//     console.log(this.cookiesPerHour);
//   }
//
// }
//
// cookieShop.custPerHr();
// cookieShop.cookiesPerHr();
// for(var i=0; i < cookieShop.hours.length; i++){
// var node = document.createElement("LI");
// var textnode = document.createTextNode(cookieShop.hours[i] + ": " + cookieShop.cookiesPerHour[i] + " cookies");
// node.appendChild(textnode);
// document.getElementById("seatacCookies").appendChild(node)
// }
//
//
// var cookieShop = {
//   location: "Seattle Center",
//   hours: ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm"],
//   customerPerHour: [],
//   cookiesPerHour: [],
//   minCustomerPerHr: 11,
//   maxCustomerPerHr: 38,
//   aveCookiePerCust: 3.7,
//   var projectedCookies = aveCookiePerCust*maxCustomerPerHr;
//   totalCookies: 0,
//   custPerHr: function() {
//     for(var i=0; i < this.hours.length; i++){
//       var rand = Math.floor(Math.random() * 65);
//       this.customerPerHour.push(rand);
//     }
//     console.log(this.customerPerHour);
//   },
//   cookiesPerHr: function() {
//     for(var i= 0; i < this.hours.length;i++) {
//       var count = Math.floor(this.customerPerHour[i]*this.aveCookiePerCust);
//       this.cookiesPerHour.push(count);
//     }
//     console.log(this.cookiesPerHour);
//   }
//
// }
//
// cookieShop.custPerHr();
// cookieShop.cookiesPerHr();
// for(var i=0; i < cookieShop.hours.length; i++){
// var node = document.createElement("LI");
// var textnode = document.createTextNode(cookieShop.hours[i] + ": " + cookieShop.cookiesPerHour[i] + " cookies");
// node.appendChild(textnode);
// document.getElementById("seattleCookies").appendChild(node)
// }
//
// var cookieShop = {
//   location: "Capitol Hill",
//   hours: ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm"],
//   customerPerHour: [],
//   cookiesPerHour: [],
//   minCustomerPerHr: 20,
//   maxCustomerPerHr: 38,
//   aveCookiePerCust: 2.3,
//   var projectedCookies = aveCookiePerCust*maxCustomerPerHr;
//   totalCookies: 0,
//   custPerHr: function() {
//     for(var i=0; i < this.hours.length; i++){
//       var rand = Math.floor(Math.random() * 65);
//       this.customerPerHour.push(rand);
//     }
//     console.log(this.customerPerHour);
//   },
//   cookiesPerHr: function() {
//     for(var i= 0; i < this.hours.length;i++) {
//       var count = Math.floor(this.customerPerHour[i]*this.aveCookiePerCust);
//       this.cookiesPerHour.push(count);
//     }
//     console.log(this.cookiesPerHour);
//   }
//
// }
//
// cookieShop.custPerHr();
// cookieShop.cookiesPerHr();
// for(var i=0; i < cookieShop.hours.length; i++){
// var node = document.createElement("LI");
// var textnode = document.createTextNode(cookieShop.hours[i] + ": " + cookieShop.cookiesPerHour[i] + " cookies");
// node.appendChild(textnode);
// document.getElementById("capitolCookies").appendChild(node)
// }
//
//
// var cookieShop = {
//   location: "Alki",
//   hours: ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm"],
//   customerPerHour: [],
//   cookiesPerHour: [],
//   minCustomerPerHr: 2,
//   maxCustomerPerHr: 16,
//   aveCookiePerCust: 4.6,
//   var projectedCookies = aveCookiePerCust*maxCustomerPerHr;
//   totalCookies: 0,
//   custPerHr: function() {
//     for(var i=0; i < this.hours.length; i++){
//       var rand = Math.floor(Math.random() * 65);
//       this.customerPerHour.push(rand);
//     }
//     console.log(this.customerPerHour);
//   },
//   cookiesPerHr: function() {
//     for(var i= 0; i < this.hours.length;i++) {
//       var count = Math.floor(this.customerPerHour[i]*this.aveCookiePerCust);
//       this.cookiesPerHour.push(count);
//     }
//     console.log(this.cookiesPerHour);
//   }
//
// }
//
// cookieShop.custPerHr();
// cookieShop.cookiesPerHr();
// for(var i=0; i < cookieShop.hours.length; i++){
// var node = document.createElement("LI");
// var textnode = document.createTextNode(cookieShop.hours[i] + ": " + cookieShop.cookiesPerHour[i] + " cookies");
// node.appendChild(textnode);
// document.getElementById("alkiCookies").appendChild(node)
// }
