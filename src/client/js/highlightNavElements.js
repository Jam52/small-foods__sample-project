function highlightNavElement(navElements, section) {
  navElements.forEach((element) => {
    let elementName = element.textContent
      .toLowerCase()
      .trim()
      .split(' ')
      .join('-')
      .replace('?', '');
    element.classList.remove('highlight');
    if (elementName == section.id) {
      element.classList.add('highlight');
    }
  });
}

function sectionIsInView() {
  console.log('[sectionIsInView]fired');
  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => {
    if (section.id.length > 0) {
      const navElements = document.querySelectorAll('.nav__link');
      if (isOnScreen(section)) {
        highlightNavElement(navElements, section);
      }
    }
  });
}

let debouncerId;

window.addEventListener('scroll', () => {
  clearTimeout(debouncerId);
  debouncerId = setTimeout(() => sectionIsInView(), 100);
});

function isOnScreen(element) {
  if (
    element.getBoundingClientRect().top < window.innerHeight / 2 &&
    element.getBoundingClientRect().bottom > window.innerHeight / 2
  ) {
    return true;
  }
  return false;
}
