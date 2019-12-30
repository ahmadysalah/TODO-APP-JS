const title = document.querySelector('#title')
const details = document.querySelector('#details')
const date = document.querySelector('#date')
const add = document.querySelector('#btn')
const contaner = document.querySelector('.flexcontainer')

var textfieled = [];
let id = 0;


add.addEventListener('click', function() {
    textfieled.push({
        id: id,
        title: title.value,
        detail: details.value,
        date: date.value
    });
    id++;
    View(textfieled)
})

let i = 1;
const se = document.getElementById('se')
const serchinput = document.getElementById('serch')
const ch = document.getElementById('ch')
ch.addEventListener('click', function() {
    if (i == 1) {
        contaner.style.cssText = "flex-wrap: nowrap;flex-direction: column;"
        i = 0
    } else {
        contaner.style.removeProperty("flex-wrap")
        contaner.style.removeProperty("flex-direction")
        i = 1

    }
})
se.addEventListener('click', function() {
    let serch = "" + serchinput.value
    let filtered = textfieled.filter((element) =>
        (element.title.includes(serch))
    )
    View(filtered);
})


serchinput.addEventListener('keyup', function() {
    let serch = "" + serchinput.value
    let filtered = textfieled.filter((element) =>
        (element.title.includes(serch))
    )
    View(filtered);
})

function View(fill) {
    let textfieled = fill
    const ele = document.querySelectorAll('.flexitem')
    ele.forEach(element => {
        element.remove()
    });

    for (data in textfieled) {

        const flexitem = document.createElement('div')
        flexitem.className = "flexitem"
        const content = document.createElement('div')
        content.className = "content"
        content.innerHTML = "<p>Detail: " + textfieled[data].detail + "</br> Date: " + textfieled[data].date + "</p>"
        const titlehead = document.createElement('h4')
        titlehead.textContent = textfieled[data].title
        contaner.appendChild(flexitem)
        flexitem.appendChild(titlehead)
        flexitem.appendChild(content)
        content.addEventListener('click', function() {
            content.style.cssText = "background-color:gray;"
        })
        flexitem.addEventListener('click', function() {
            content.className = "viw"

        });
        const btndel = document.createElement('button')
        btndel.textContent = "delete"
        btndel.style.cssText = "padding:5px"
        flexitem.appendChild(btndel)
        btndel.addEventListener('click', function() {

            if (confirm("Are you sure !!")) {
                textfieled.splice(data - 1, 1)
            }

            View(textfieled)
        })
    }
}