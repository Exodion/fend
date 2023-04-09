/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let allSections;
let section;
let menuItems = [];
let x = 1; // Section number
let y = 1; // Section number
let link = "";
const fragment = document.createDocumentFragment();
let coordinates = [];
let coordtop, coordleft;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
allSections = document.querySelectorAll("section");

for (let section of allSections){
    let heading = "";
    let ident = `section${x}`;


    heading = section.querySelector("h2").textContent;
    link = `<a href="#${ident}">${heading}</a>`;

    //li erstellen
    newLi = document.createElement("li");
    newLi.setAttribute("id",`menu-link-${x}`);
    newLi.addEventListener("click",console.log("test"));
    newLi.innerHTML = link;
    let alink = newLi.querySelector("a");
   // alink.addEventListener("click", function(){


   // })
    menuItems[x-1] = newLi;

    console.log(link);



    x = x + 1;
}



for (let menuItem of menuItems){
refresh(section, allSections, coordinates, coordtop, coordleft);
    fragment.appendChild(menuItem);

}

document.querySelector("#navbar__list").appendChild(fragment); 

//for (y = 1; y < x; y++){

function refresh(section, allSections, coordinates, coordtop, coordleft){
    for ( section of allSections){
        
        coordinates[y] = section.getBoundingClientRect();
        console.log(coordinates[y].top, coordinates[y].left);
        let linkA = document.getElementById(`menu-link-${y}`);
        coordtop = coordinates[y].top;
        coordleft = coordinates[y].left;
        console.log(linkA);
        //link = document.querySelector("a");
        linkA.addEventListener("click", function myfunc(e, coordtop, coordleft) { 
            e.preventDefault();
            window.scrollTo({
            top: coordtop, 
            left: coordleft,
            behavior: "smooth"
            
            });
        }
        );
        console.log(coordinates[y].top);
        y = y + 1;
        
    
    }
}
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


