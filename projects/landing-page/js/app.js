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

let allAnchors;


// build the nav
allSections = document.querySelectorAll("section");

for (let section of allSections){
    let heading = "";
    let ident = `section${x}`;


    heading = section.querySelector("h2").textContent;
    link = `<a href="#${ident}">${heading}</a>`;

    //create li tag
    newLi = document.createElement("li");
    newLi.setAttribute("id",`menu-link-${x}`);
    newLi.addEventListener("click",console.log("test"));
    newLi.innerHTML = link;
    menuItems[x-1] = newLi;

    console.log(link);



    x = x + 1;
}

for (let menuItem of menuItems){

        fragment.appendChild(menuItem);

    }

document.querySelector("#navbar__list").appendChild(fragment); 



allAnchors = document.querySelectorAll('a[href^="#"]');

for (let anchorItem of allAnchors){

    anchorItem.addEventListener("click", function(event){
        event.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"
        }


        )

        

    })

}

// Add class 'active' to section when near top of viewport
document.addEventListener("scroll", function(event){
        for (const section of allSections) {
        const box = section.getBoundingClientRect();

        if (box.top <= 200 && box.bottom >= 150) {
        //apply active state on current section and corresponding Nav link
        section.setAttribute("class","active");
        section.classList.add("highlight");

        } else {
        //Remove active state from other section and corresponding Nav link
        section.setAttribute("class","");
        
        }
        }
    })


