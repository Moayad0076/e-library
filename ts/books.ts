interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "الأربعين في أصول الدين",
    author: "الإمام الغزالي",
    category: "العقيدة",
  },
  {
    id: 2,
    title: "رياض الصالحين",
    author: "الإمام النووي",
    category: "الحديث",
  },
  {
    id: 3,
    title: "بداية الهداية",
    author: "الإمام الغزالي",
    category: "التزكية",
  },
];

function findByAuthor(list: Book[], author: string): Book[] {
  return list.filter(function (book) {
    return book.author.includes(author);
  });
}

const result = findByAuthor(books, "الغزالي");
console.log(result);
