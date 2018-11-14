//IMAGE CHANGES WHEN YOU CLICK ON IT
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/coffee.jpg') {
      myImage.setAttribute ('src','images/tulip.jpg');
    } else {
      myImage.setAttribute ('src','images/coffee.jpg');
    }
}

// BUTTON FOR CHANGING THE USER AND WELCOMING THE USER

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to my page, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to my page, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }

// belowe we are creating a list that the viewer  can change
var list = document.createElement('ul');
var info = document.createElement('p');
var clickableelement = document.querySelector('h3');

info.textContent = 'you can add some recommendations for cafes yourself. Click on the headline above to create a new list below and add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(info);
document.body.appendChild(list);

clickableelement.onclick = function() {
  var listItem = document.createElement('li');
  var listContent = prompt('What cafe do you recommend?');
  listItem.textContent = listContent;
  list.appendChild(listItem);  
  

  listItem.onclick = function(e) {
    e.stopPropagation();
    var listContent = prompt('Enter new content for your list item');
    this.textContent = listContent; 
  
  }
}

  
 

  
