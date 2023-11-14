document.querySelector('#h').addEventListener('click', (evt) => {
    document.querySelector('#h').style.color = 'red';
    document.querySelector(`#h`).innerHTML = "NO YOU CLICKED ME!";
});

document.querySelector('#btn').addEventListener('click', (evt) => {
    console.log("Click!")
    console.log(evt)
    console.log(`You clicked on: ${evt.target.id}`)
});

// querySelectorAll to reach a variety of elements
document.querySelectorAll('.clickable').forEach((elem) => {
    console.log(elem.innerHTML)
    elem.addEventListener('click', (evt) => {
        console.log(`You clicked on: ${evt.target.innerHTML}`)
    });
});

// Works also for list:
document.querySelector('#list').addEventListener('click', (evt) => {
    console.log(`du klickade på ${evt.target.innerHTML}`)
});

// change-event
document.querySelector('#datum').addEventListener('change', (evt) => {
    // We can split ISO-date (yyyy-mm-dd) to one array!
    const datum = evt.target.value.split('-');
    console.log(`In Finland we say: ${datum[2]}.${datum[1]}.${datum[0]}`)
});

document.querySelector('#dropdown').addEventListener('change', (evt) => {
    console.log(evt.target.value);
    document.querySelector('#dropdown-output').style.color = evt.target.value;
})

// input-event
document.querySelector('#slider').addEventListener('input', (evt) => {
    document.querySelector('#slider-out').innerHTML = evt.target.value;
});

document.querySelector('#long-text').addEventListener('input', (evt) => {
    document.querySelector('#text-out').innerHTML = evt.target.value.toUpperCase();
});

document.querySelector('#check').addEventListener('click', (evt) => {
    if (evt.target.checked) {
        document.querySelector('#check-output').innerHTML = `
            Thanks, we will send a lot of spam!
        `;
    } else {
        document.querySelector('#check-output').innerHTML = `
        You have to agree to everything!
    `;
    }
});
