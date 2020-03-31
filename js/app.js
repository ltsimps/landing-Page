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
 * Define Global Variables
 *
 */

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

//event listenters
document.addEventListener("DOMContentLoaded", AddNavContentOnLoad);
navigating = document.getElementById("navbar__list");
//console.log(navigating);

navigating.addEventListener("click", event => {
  console.log("nav clicked");
  console.log(event.target);
  event.target.classList.toggle("active-link");

  setTimeout(() => {
    event.target.classList.toggle("active-link");
  }, 500);
});

function AddNavContentOnLoad() {
  //console.log("Content is Loaded");
  const sectionFragment = document.createDocumentFragment();
  let navbar = document.getElementById("navbar__list");
  // console.log(navbar);
  sections = getSections();

  //add  navbar once sections have been obtained
  for (section of sections) {
    newSection = document.createElement("li");
    newSection.innerHTML = `<a id="nav-${section.id}" href="#${section.id}" class="navSection">${section.id}</a>`;
    sectionFragment.appendChild(newSection);
    //console.log(newSection);
  }
  //add to navbar at the end navbar.
  //console.log(navbar);
  navbar.appendChild(sectionFragment);
}

function ScrollToSection() {
  anchors = document.querySelectorAll();
}

function getSections() {
  sections = document.querySelectorAll("section");
  //console.log(sections.length);

  return sections;
}
