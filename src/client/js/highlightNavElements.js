

const sections = document.querySelectorAll('.section')
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        if(section.id.length > 0){
            if(isOnScreen(section)){
                const navElements = document.querySelectorAll('.nav__links li');
                highlightNavElement(navElements, section);
            } else {

            }
        }
    })
})

function isOnScreen(element) {
    if (element.getBoundingClientRect().top < (window.innerHeight/2) 
    && element.getBoundingClientRect().bottom > (window.innerHeight/2)) {
        return true;
    }
    return false;
};


function highlightNavElement(navElements, section) {
    navElements.forEach(element => {
        let elementName = element.textContent.toLowerCase().split(' ').join('-').replace('?', '');
        element.style.paddingBottom = '1rem';
        element.style.borderBottom = 'none';
        if(elementName == section.id){
            element.style.borderBottom = '0.7rem solid #B4C339';
            element.style.paddingBottom = '0.3rem';
        }
    })
}