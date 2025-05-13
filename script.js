const form = document.getElementById("myform")
const bkname = document.getElementById("bkname")
const bkurl = document.getElementById("bkurl")
const btn = document.getElementById("btn")
const savedbookmark = document.getElementById("savedbmpara")

// getitem returns a string
// parse converts into an array of objects


function displaybookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    savedbookmark.innerHTML = "";

    // showing all bookmarks
    bookmarks.forEach((bookmark, index) => {
        const div = document.createElement("div");
        div.className = "items";

        div.innerHTML = `<strong>${index + 1}. ${bookmark.bname}</strong> - <a href="${bookmark.burl}" target="_blank">${bookmark.burl}</a><br><br>`;

        savedbookmark.appendChild(div);
    });

    if (bookmarks.length === 0) {
        savedbookmark.textContent = "No Bookmarks Found"
    }
}

// loading bookmarks on page load
window.addEventListener("DOMContentLoaded", () => {
    displaybookmarks();
})

// save bookmarks 
btn.addEventListener("click", () => {
    const newbookmark = {
        bname: bkname.value.trim(),
        burl: bkurl.value.trim()
    }

    if (!newbookmark.bname || !newbookmark.burl) {
        alert("Please enter both name and URL.");
        return;
    }

    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    bookmarks.push(newbookmark);

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    bkname.value = "";
    bkurl.value = "";

    displaybookmarks();
})

// clear bookmarks

const clearbtn = document.getElementById("clearbtn");

clearbtn.addEventListener('click', () => {
    localStorage.removeItem("bookmarks");

    savedbookmark.innerHTML = "";

    savedbookmark.textContent = "All Empty :("
})



