const form = document.getElementById("myform")
const bkname = document.getElementById("bkname")
const bkurl = document.getElementById("bkurl")
const btn = document.getElementById("btn")
const savedbookmark = document.getElementById("savedbmpara")




// load bookmarks
window.addEventListener("DOMContentLoaded", () => {
    const storedbk = localStorage.getItem("bookmark");

    if (storedbk) {
        const bookmark = JSON.parse(storedbk);
        savedbookmark.innerHTML = `${bookmark.bname} - <a href="${bookmark.burl}" target="_blank">${bookmark.burl}</a>`;
    }
    else {
        savedbookmark.textContent = "Sorry, no bookmark found :(";
    }
})

// save bookmarks
btn.addEventListener("click", () => {
    const bookmark = {
        // used object to store multiple values
        bname: bkname.value.trim(),
        burl: bkurl.value.trim()
    }
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
    savedbookmark.innerHTML = `${bookmark.bname} - <a href="${bookmark.burl}" target="_blank">${bookmark.burl}</a>`;

})

