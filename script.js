//Dynamic year in footer

const yearSpan = document.querySelector('.year')
const date = new Date();
const year = date.getFullYear();

yearSpan.textContent = year;


//Nav Toggle functionality
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */

  const navOverlay = document.querySelector('.nav-overlay');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.link');


 const menuBtn = document.querySelector('.menu-toggle');
 const closeBtn = document.getElementById('nav-close');

 menuBtn.addEventListener('click', () => {
    navOverlay.style.width = '100%';
    navLinks.style.display = 'block';
    menuBtn.style.display = 'none';

    Array.from(links).forEach(link => {
      link.style.display = 'block';
    })

    
 })
 
 closeBtn.addEventListener('click', () => {
   navOverlay.style.width = 0;
   menuBtn.style.display = 'block';

 })


 //modal functionality

 const modalOpen = Array.from(document.querySelectorAll('#modal-open'));
 const modalClose = Array.from(document.querySelectorAll('#modal-close'));
 const modalContainer = Array.from(document.querySelectorAll('.modal-container'));


modalOpen.forEach((item, i) => {
  item.addEventListener('click', e => {
    modalContainer[i].style.display = 'flex';
  })
})

modalClose.forEach((item, i) => {
  item.addEventListener('click', e => {
    modalContainer[i].style.display = 'none';
  })
})



 
     

//To make scroll feature have flexible number of elements.

const projects = document.querySelectorAll('.container');

projects.forEach(project => {
  const projectItems = project.querySelectorAll('.item');
  const n = project.children.length;


  project.style.setProperty('--total', n);
})