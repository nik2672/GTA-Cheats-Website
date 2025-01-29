// js/main.js

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.platform-button');
  const content = document.querySelector('#content');

  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const page = link.getAttribute('href');

      fetch(page)
        .then(response => response.text())
        .then(html => {
          // Extract the content inside the <div class="platform-page">...</div>
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const platformPage = doc.querySelector('.platform-page');
          content.innerHTML = '';
          content.appendChild(platformPage);

          // Scroll to top
          window.scrollTo(0, 0);
        })
        .catch(err => console.warn('Something went wrong.', err));
    });
  });
});
