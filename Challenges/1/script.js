var accordions = document.getElementsByClassName('accordion')
for (const accordion of accordions) {
    accordion.addEventListener('click', () => {
        accordion.classList.toggle('change')
        accordion.classList.toggle('active')
        var panel = accordion.nextElementSibling
        panel.style.display = panel.style.display === 'block' ? 'none' : 'block'
        panel.style.maxHeight = panel.style.maxHeight === "" ? panel.scrollHeight + "px" : ""
        panel.classList.toggle('active')
    })
}