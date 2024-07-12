const nextButton = document.getElementById('next-button');
const book = document.querySelector('.book');
const pages = document.querySelectorAll('.page');

let currentPage = 0;

nextButton.addEventListener('click', () => {
  book.classList.add('open');
  pages[currentPage].classList.add('page-active');
  setTimeout(() => {
    book.classList.remove('open');
    pages[currentPage].classList.remove('page-active');
    currentPage += 1;
    if (currentPage >= pages.length) {
      currentPage = 0;
    }
  }, 1000);
});

function clc(){
    document.querySelector(".title").innerHTML="";
    document.querySelector(".book2").style.display="flex"
}