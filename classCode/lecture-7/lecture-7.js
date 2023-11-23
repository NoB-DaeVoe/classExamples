function openLightbox(elem) {
    const bigImg = elem.dataset.fullsize;
    // Works aswell: elem.getAttribute("data-fullsize")
    console.log(bigImg);
    document.querySelector('#lightbox img').src = bigImg;
    document.querySelector('#lightbox').style.display = "flex";
}

document.querySelectorAll('#thumbnails img').forEach((elem) => {
    elem.addEventListener('click', () => openLightbox(elem));
});

document.querySelector('#lightbox').addEventListener('mousedown', () => {
    document.querySelector('#lightbox img').src = 'img/Funny.gif';
    document.querySelector('#lightbox').style.display = 'none';
});

// Cookies & LocalStorage:

if (localStorage.getItem("name")) {
    document.querySelector('#greeting').innerHTML = `
        Welcome back, ${localStorage.getItem("name")}!
    `;
}

function saveName() {
    const Name = document.querySelector('#name').value;

    localStorage.setItem("name", Name);

    document.cookie = `name=${Name}`;
}