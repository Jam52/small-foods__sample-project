const dropDownIcon = document.querySelector('.nav__dropdown__icon');
const dropDownElements = document.querySelector('.nav__links');
dropDownIcon.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('dropDown Clicked');
    console.log(dropDownElements)
    dropDownElements.classList.toggle('show');
})