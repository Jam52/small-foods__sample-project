//import styles
import "./styles/import.scss";

import "./js/highlightNavElements";

//event listener for dropdown in nav
const dropDownIcon = document.querySelector(".nav__dropdown-icon");
const dropDownElements = document.querySelector(".nav__links");
dropDownIcon.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("dropDown Clicked");
    console.log(dropDownElements);
    dropDownElements.classList.toggle("show");
});

//event listener to scrollTo sections
const navElements = document.querySelectorAll(".nav__links");
console.log(navElements);
navElements.forEach((nav) => {
    nav.addEventListener("click", (event) => {
        console.log("nav clicked");
        event.preventDefault();
        const target = event.target.firstChild.textContent
            .toLowerCase()
            .split(" ")
            .join("-")
            .replace("?", "");
        const section = document.querySelector(`#${target}`);
        const offset =
            section.getBoundingClientRect().top + window.pageYOffset - 100;
        // section.scrollIntoView({behavior: "smooth"});
        window.scrollTo({ top: offset, behavior: "smooth" });
        dropDownElements.classList.remove("show");
    });
});

//event listener for home icon
const homeIcon = document.querySelector(".nav__home");
homeIcon.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});
