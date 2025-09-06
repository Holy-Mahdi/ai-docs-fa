const searchBox = document.getElementById('searchBox');
const sidebarLinks = document.querySelectorAll('#sidebar a');

searchBox.addEventListener('input', () => {
  const query = searchBox.value.toLowerCase();
  sidebarLinks.forEach(link => {
    const text = link.textContent.toLowerCase();
    link.style.display = text.includes(query) ? 'block' : 'none';
  });
});
