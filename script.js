const modal = document.getElementById('myModal');
const btn = document.getElementById('openBtn');
const closeSpan = document.querySelector('.close');

btn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeSpan.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
