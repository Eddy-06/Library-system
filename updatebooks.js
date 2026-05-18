document.addEventListener("DOMContentLoaded", function () {

    const searchIcon = document.querySelector(".bi-search");
    const searchBar = document.querySelector(".search-bar");
    const booksContainer = document.querySelector(".books");
    const categorySelect = document.getElementById("categorySelect");

    // 🔍 Toggle search bar
    searchIcon.addEventListener("click", () => {
        searchBar.style.display =
            searchBar.style.display === "block" ? "none" : "block";
    });

    // 📚 Create 80 books with categories
    const books = [];

    // EEE → 10 books
    for (let i = 1; i <= 10; i++) {
        books.push({ title: "EEE " + i, category: "EEE" });
    }

    // ICT → 20 books
    for (let i = 1; i <= 20; i++) {
        books.push({ title: "ICT " + i, category: "ICT" });
    }

    // CIVIL ENGINEERING → 30 books
    for (let i = 1; i <= 15; i++) {
        books.push({ title: "CIVIL Engineering " + i, category: "civil engineering" });
    }

    // ENTERTAINMENT → 10 books
    for (let i = 1; i <= 10; i++) {
        books.push({ title: "Entertainment " + i, category: "entertainment" });
        
    }

    // NOVELS → 10 books
    for (let i = 1; i <= 10; i++) {
        books.push({ title: "Novel " + i, category: "novels" });
    }

    // 📦 Display books
    function displayBooks(list) {
        booksContainer.innerHTML = "";

        list.forEach((book, index) => {
            booksContainer.innerHTML += `
                <div class="book">
                    <img src="https://picsum.photos/150/200?random=${index+1}">
                    <h4>${book.title}</h4>
                    <div class="buttons"><button>Update</button> <button>Delete </button></div>
                </div>
            `;
        });
    }

    // 🎯 Category filter
    categorySelect.addEventListener("change", function () {
        const selected = this.value;

        if (selected === "all") {
            displayBooks(books); // show all 80
        } else {
            const filtered = books.filter(b => b.category === selected);
            displayBooks(filtered);
        }
    });

    // ⭐ Recommendation click (optional reuse)
    const boxes = document.querySelectorAll(".recommendations .box");

    boxes.forEach((box, i) => {
        box.addEventListener("click", () => {
            const start = 10 + (i * 5);
            const newBooks = books.slice(start, start + 10);
            displayBooks(newBooks);
        });
    });

    // 🚀 Initial load
    displayBooks(books);
});