function miejsca() {
    const allSits = [...document.querySelectorAll("#Bombardier > *")];
    const buttonReturn = document.getElementById("buttonReturn");
    let savedSits;

    allSits.forEach((sit) => {
        sit.addEventListener("click", () => {
            sit.classList.toggle("col--pick")
        })
    })

    buttonReturn.addEventListener("click", (e) => {
        savedSits = [...document.querySelectorAll("#Bombardier > .col--pick")]

        savedSits = savedSits.map((sit) => sit.attributes.id.textContent.replace('bombSeat', ''))

        if (savedSits.length > 0) {
            localStorage.setItem('savedSits', savedSits);
        }
    })

    // przyklad do inputow

    const input1 = document.getElementById('moj-input')
    let valueInput1 = '';

    input1.addEventListener("input", (e) => {
        valueInput1 = e.target.value
        localStorage.setItem('savedInput', valueInput1);
    })

    const showAllButton = document.getElementById("show-all")
    const result = document.querySelector(".result")

    showAllButton.addEventListener("click", () => {
        const x = localStorage.getItem('savedSits')
        const y = localStorage.getItem('savedInput')
        console.log('x', x);
        console.log('y', y);
        result.innerHTML = `to sa moje siedzenia ${x}, a to jest moj input ${y}`

    })

}

document.addEventListener("DOMContentLoaded", miejsca);