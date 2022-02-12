// Select the h1 element and store it in a variable named heading.
let heading=document.querySelector(`h1`);
console.log(heading);
// Check the typeof heading and log it.
console.log(typeof heading);
// Change the color of heading to black.
heading.style.color="black";
// Select all the hr elements and store it in a variable named allHrs using querySelectorAll
let allHrs=document.querySelectorAll(`hr`);
/* 
Convert the NodeList returned by querySelectorAll to Array using Array.from() or spread operator and store it in allHrsArray

Array.from converts an array kind of data into array so we can use methods like map, reduce

HINT:
let allHrsArray = Array.from(allHrs)
*/
let allHrsArray=Array.from(allHrs);
// Set the border of the all the hr elements to "1px solid tomato"
let allHr=document.querySelectorAll(`hr`);
// Change the background of all the hr to "antiquewhite" using for of loop.
for(let allHr of allHrs){
  allHr.style.backgroundColor=`antiquewhite`;
}
// Change the 'border-radius' of all the hr to "5px" using array.
allHrs.forEach((hr)=>hr.style.borderRadius=`5px`);
// Change the alignment of the heading(h1) to center.
let div=document.querySelector(`.page`);
div.style.textAlign=`center`;

// Change the font size of the heading to 3rem.
heading.style.fontSize=`3rem`;
// Change the border of hr with class 'image' to `2px solid purple`.
let hr=document.querySelector(`.image`);
hr.style.border=`2px solid purple`
// Hide the box number 17 (last box).
let box17=document.querySelector(`.seventeen`);
box17.style.display = "none";
// Change the border of all the hr element from solid to dashed type
allHrs.forEach((element)=>element.style.border=`10 px dashed red`);
// Create a pragraph element and store it in variable named 'para' using `createElement`
let para=document.createElement(`p`);
// Change the inner text of para to "querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure."
para.innerText="raj";
// Remove all the elements from box 1
let box1=document.querySelector(`.one`);
let box1Item=document.querySelector(`.image`);
box1Item.remove();
let boxItem=document.querySelector(`.hr`);
boxItem.style.display=`none`;


// Replace all the elements inside box 1 with the para (you created above)
box1.append(para);
/* Walking the DOM
Do the following after selecting box 16 and storing in variable named box16

  - Access the parentNode
  - Access the childNodes
  - Access previousSibling
  - Access nextSibling
  - Access firstChild
  - Access lastChild


  - Access previousElementSibling
  - Access nextElementSibling
  - Access firstElementChild
  - Access lastElementChild

  - Focus on the difference between element and node
*/
let box16=document.querySelector(`.sixteen`);
console.log(box16.parentNode);
console.log(box16.childNodes);
console.log(box16.previousSibling);
console.log(box16.nextSibling);
console.log(box16.firstChild);
console.log(box16.lastChild);
console.log(box16.previousElementSibling);
console.log(box16.nextElementSibling);
console.log(box16.firstElementChild);
console.log(box16.lastElementChild);

// Select box 2 and append a new paragraph element with content "Append inserts as last child" just after hr element.
let box2=document.querySelector(`.two`);
let paragraph=document.createElement(`p`);
paragraph.innerText="Append inserts as last child";
box2.append(paragraph);

// Select box 3 and prepend a new paragraph element with content "Prepend inserts as first child" just before hr element.
let box3=document.querySelector(`.three`);
let paragraph3=document.createElement(`p`);
paragraph3.innerText="Prepend inserts as first child";
box3.prepend(paragraph3);
// Change the border of box 4 to '1px solid black'
let box4=document.querySelector(`.four`);
box4.style.border='1px solid black';
// Change the border radius of box 5 to 10px.
let box5=document.querySelector(`.five`);
box5.style.borderRadius="10px";
// Change the text color of box 6 to black.
let box6=document.querySelector(`.six`);
box6.style.color="black";
// Change the font size of the para inside box 1 to 0.8rem.
para.style.fontSize=`0.84rem`;
// Change the background of all the alternate boxes (1, 3, 5, ....) to aliceblue


// add a class named "awesome-box" to the box 6 using classList property of DOM element.
box6.classList.add("awesome-box");
console.log(box6);
// Using the toggle classList property toggle the class `awesome-box` from box 2
box2.classList.toggle("awesome-box");
console.log(box2);
// Using the remove classList proeprty remove the class `awesome-box` from box 4
box4.classList.remove("awesome-box");
console.log(box4);
// Change the background of the body to bisque
document.body.style.background="bisque";
// Create a button and store it in a variable named 'btn'
let btn =document.createElement(`button`);
// textContent of the button should be 'Click Me'
btn.innerText="Click Me";
// Change the background of the btn to 'oldlace'
btn.style.backgroundColor="oldace";
console.log(btn);
// Change the font size of the btn to 1rem
btn.style.fontSize=`1rem`;
// Change the border of the btn to '1px solid black'
btn.style.border='1px solid black';
console.log(btn);
// Add the padding of '0.5rem 1rem' to btn
btn.style.padding=`0.5rem 1rem`;
// Append the btn in box number 9
let box9=document.querySelector(`.nine`);
box9.append(btn);
// Create a img element with src value `https://images.unsplash.com/photo-1592500595497-d1f52a40b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80` and store in a variable named imgElm
let imgElm=document.createElement(`img`);
// Select the box 7 using class seven
let box7=document.querySelector(`.seven`);
// Remove all the elements form box seven
let boxItem7=document.querySelector(`.b`);
boxItem7.style.display="none";
let boxItem71=document.querySelector(`.d`);
boxItem71.style.display="none";
let boxItem72=document.querySelector(`.e`);
boxItem72.style.display="none";


// Append the imgElm to the box no 7
box7.append(imgElm);
// Change the width and height of the image to `100%`

// Select the box 5 using class five
let box_5=document.querySelector(`.five`);

// Create an input element
let input=document.createElement(`input`);


// Change the placeholder property of the input element to "Enter you email!"
input.placeholder="Enter you email!";
console.log(input);
// Append the input element to the box 5 you selected above
box5.prepend(input);
// Create two anchor (a) element with  the text of `AltCampus` and `Google`
let a=document.createElement(`a`);
a.innerText="AltCampus";
let b=document.createElement(`a`);
b.innerText="google";
// Change the href property of the anchor elements to `https://altcampus.school` and `https://google.com`
a.href=`https://altcampus.school`
b.href=`https://google.com`
// Append both the elements to box 5 you selected above.
box5.append(a);
box5.prepend(b);