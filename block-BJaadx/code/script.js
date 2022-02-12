// 1. Change the title of the page to `Hello AltCampus!`
document.title= "AltCampus is best  campus";

// 2. Select the element using the children property:
document.head.children["title"];
title.innerText= "AltCampus";
//    - Select the `h1` element and change the value to `Learning DOM`
 let h=document.querySelector(`h1`);
 h.innerText=`Learning DOM`
console.log(h)

//    - Select the first `li` element inside the `ul` with class `topics` and change the innerText to `all about document`
let ul= document.querySelector(`.topics`);
ul.innerText=`all about document`
console.log(ul);
//    - Select the input element with name `email`
// let email= document.querySelector()
// 3. Log the number (using console.log) of children of all the `li` element inside the ul with class `topics`
let ul= document.querySelectorAll(`li`);
console.log(ul);


// 4. Select the first input using the `type` selector and store them in variable named `emailInput`
let emailInput = document.querySelector(`input`);
console.log(emailInput);
// 5. Select the ul element using class selector and store in `topics`
let topics= document.querySelector(`.topics`);
console.log(topics);
// 6. Select the first label element and store in `label`
let lable=document.querySelector(`lable`);
console.log(lable);
// 7. Select the input of type `checkbox` with the `id` selector and store in `inputCheckbox`
let inputCheckbox=document.getElementById(`remember`);
console.log(inputCheckbox);
// 8. Select the input of type password using Attribute selectors. (eg: input[type="text"]) and store in `password`
let password=document.querySelector(`#password`);
console.log(password);
// 9. Select the input using the placeholder attribute selector with value `password` and store in `attrPassword`

// 10. Select all the `li` element and store in `allTopics`
let allTopics=document.querySelectorAll(`li`);
console.log(allTopics);
// 11. Select all the input element of any type and store in `allInput`
let allInput= document.querySelectorAll(`input`);
console.log(allInput);
// 12. Use forEach to console the `innerText` property of all the li element in `allTopics` variable.
let allTopics=document.querySelectorAll(`li`).forEach((itemName)=>itemName);


console.log(allTopics);
// 13. Select all the elements with class `list` and store in variable `listOfSelectedTopics`
let listOfSelectedTopics=document.querySelectorAll(`li`);
console.log(listOfSelectedTopics);
// 14. Select the first li element inside the `ul` element using `>` (direct child) and store in `firstLi`
let ulTopics=document.querySelector(`ul`);
console.log(ulTopics.firstElementChild);
// 15. Select all the img element and log the number of element saying `The total number of img element is ---`
let img=document.querySelector(`img`);
console.log(`The total number of img element is 1`);
// 16. Select all the `p` element and store in `allPElement`
let allPElement=document.querySelectorAll(`p`);
console.log(allPElement);
// 17. Select all the buttons and log the count of buttons.
let buttons= document.querySelectorAll(`button`);
console.log(buttons);
// 18. Select all the `label` element and log the count.
let lable=document.querySelectorAll(`lable`);
console.log(lable);
// 19. Select all the elements with `id` of `test`
console.log(document.getElementById(`test`));
// 20. Select the first element with id `test` using `getElementById`
let test=document.getElementById(`test`)
test.firstElementChild;
// 21. Select the parent element of the element stored in `topics` variable (#5) and log the element.
let element=document.querySelector(`topics`);
console.log(element.parentElement);
// 22. Select the next element sibling of the element stored in `topics` variable (#5) and log the element.
console.log(element.nextSibling);
// 23. Select the previous element sibling of the element stored in `topics` variable (#5) and change the `innerText` property to `Learning About Walking the DOM`.
console.log(element.previousElementSibling);
// 24. Select the first element child of the element stored in `topics` variable (#5) and change the `innerText` property of the element to `This is the first child element`.
let elementChild=topics.firstElementChild
console.log(elementChild.innerText);

// 25. Select the last element child of the element stored in `topics` variable (#5) and log the `typeof` the element.
let element=topics.lastElementChild
console.log(typeof element);
// 26. Select the element with type `fieldset` and store in a variable named `fieldsetElm`.
let fieldsetElm=document.querySelector(`fieldset`);
// 27. Select the parent element of the element stored in `fieldsetElm` variable (#5) and log the `typeof` the element.
console.log(fieldsetElm.parentElement);