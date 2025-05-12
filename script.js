const form = document.getElementById("myform")
const bkname = document.getElementById("bkname")
const bkurl = document.getElementById("bkurl")
const btn = document.getElementById("btn")
const saved = document.getElementById("savedbm")




// load bookmarks
window.addEventListener("DOMContentLoaded", () => {
    const storedbk = localStorage.getItem("bookmark");

    if (storedbk) {
        const bookmark = JSON.parse(storedbk);
        saved.textContent = `${bookmark.bname} - ${bookmark.burl}`;
    }
    else {
        saved.textContent = "no bookmark found";
    }
})

// save bookmarks
btn.addEventListener("click", () => {
    const bookmark = {
        bname: bkname.value.trim(),
        burl: bkurl.value.trim()
    }
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
    saved.innerHTML = `${bookmark.bname} - <a href="${bookmark.burl}" target="_blank">${bookmark.burl}</a>`;

})

