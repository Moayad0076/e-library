const details = document.querySelector("#details");

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const book = books.find(function (b) {
  return b.id === id;
});

if (book)   {
  document.title = book.title + " - مكتبة الجبل";

  details.innerHTML = `
    <img src="${book.image}" alt="غلاف كتاب ${book.title}">
    <div>
      <h2>${book.title}</h2>
      <p><strong>المؤلف:</strong> ${book.author}</p>
      <p><strong>التصنيف:</strong> ${book.category}</p>
      <p><strong>الوصف:</strong> ${book.description}</p>
      <a href="books.html">← رجوع للكتب</a>
    </div>
  `;
} else {
  details.innerHTML = `
    <div>
      <h2>الكتاب غير موجود</h2>
      <a href="books.html">← رجوع للكتب</a>
    </div>
  `;
}
