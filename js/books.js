const grid = document.querySelector(".books-grid");
const searchInput = document.querySelector("#search");
const buttons = document.querySelectorAll(".categories button");
let currentCategory = "الكل";

function renderBooks(list) {
  grid.innerHTML = "";

  if (list.length === 0) {
    grid.innerHTML = '<p class="no-results">لا توجد كتب مطابقة 📚</p>';
    return;
  }

  list.forEach(function (book) {
    grid.innerHTML += `
      <article class="book-card">
        <img src="${book.image}" alt="غلاف كتاب ${book.title}">
        <h3>${book.title}</h3>
        <p>المؤلف: ${book.author}</p>
        <p>التصنيف: ${book.category}</p>
        <a href="book.html?id=${book.id}" class="btn">التفاصيل</a>
      </article>
    `;
  });
}

function filterBooks() {
  const text = searchInput.value.trim();

  const result = books.filter(function (book) {
    const matchText = book.title.includes(text) || book.author.includes(text);
    const matchCategory = currentCategory === "الكل" || book.category === currentCategory;
    return matchText && matchCategory;
  });

  renderBooks(result);
}

searchInput.addEventListener("input", filterBooks);

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    currentCategory = button.textContent.trim();

    buttons.forEach(function (b) {
      b.classList.remove("active");
    });
    button.classList.add("active");

    filterBooks();
  });
});

renderBooks(books);