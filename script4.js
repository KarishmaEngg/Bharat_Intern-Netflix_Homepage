// Scroll functionality for movie rows
const movieRows = document.querySelectorAll('.movies-row');

movieRows.forEach(row => {
  let isDown = false;
  let startX;
  let scrollLeft;

  row.addEventListener('mousedown', (e) => {
    isDown = true;
    row.classList.add('active');
    startX = e.pageX - row.offsetLeft;
    scrollLeft = row.scrollLeft;
  });

  row.addEventListener('mouseleave', () => {
    isDown = false;
    row.classList.remove('active');
  });

  row.addEventListener('mouseup', () => {
    isDown = false;
    row.classList.remove('active');
  });

  row.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - row.offsetLeft;
    const walk = (x - startX) * 3; // scroll-fast
    row.scrollLeft = scrollLeft - walk;
  });
});

// "Watch Now" button functionality
const watchButton = document.querySelector('.btn-watch');

watchButton.addEventListener('click', () => {
  alert("Starting your movie now!");
  // You can add code here to load a video or redirect to a movie player page.
});
