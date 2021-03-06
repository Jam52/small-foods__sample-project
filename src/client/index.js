import './styles/resets.scss';
import './styles/_base.scss';
import './styles/nav.scss';
import './styles/header.scss';
import './styles/sections-main.scss';
import './styles/section-download.scss';
import './styles/section-divider-img.scss';
import './styles/section-standards.scss';
import './styles/section-landing.scss';
import './styles/section-articles.scss';
import './styles/section-footer.scss';

import './js/highlightNavElements';

const dropDownIcon = document.querySelector('.nav__dropdown-icon');
const dropDownElements = document.querySelector('.nav__links');
dropDownIcon.addEventListener('click', (event) => {
  event.preventDefault();
  dropDownElements.classList.toggle('show');
});

const navElements = document.querySelectorAll('.nav__links');

navElements.forEach((nav) => {
  nav.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target.firstChild.textContent
      .toLowerCase()
      .split(' ')
      .join('-')
      .replace('?', '');
    const section = document.querySelector(`#${target}`);
    const offset =
      section.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top: offset, behavior: 'smooth' });
    dropDownElements.classList.remove('show');
  });
});

const homeIcon = document.querySelector('.nav__home');
homeIcon.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});
