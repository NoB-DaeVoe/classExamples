document.querySelector('nav').addEventListener('click', (evt) => {
    if (evt.target.localName != 'span') return;
    console.log(evt.target.dataset.page);
    loadContent(evt.target.dataset.page);
});

async function loadContent(page) {
    const req = await fetch(`./content/${page}.html`);
    const content = await req.text();
    document.querySelector('article').innerHTML = content;
}
loadContent('mainpage');
