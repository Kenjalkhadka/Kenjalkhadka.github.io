const searchInput = document.querySelector("#siteSearch");
const searchableItems = [...document.querySelectorAll(".searchable")];
const emptyMessage = document.querySelector("#searchEmpty");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    let visible = 0;
    searchableItems.forEach(item => {
      const content = `${item.innerText} ${item.dataset.search || ""}`.toLowerCase();
      const match = content.includes(query);
      item.hidden = !match;
      if (match) visible++;
    });
    if (emptyMessage) emptyMessage.hidden = visible !== 0 || query.length === 0;
  });
}

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => link.addEventListener("click", () => {
  navLinks.forEach(item => item.classList.remove("active"));
  link.classList.add("active");
}));
