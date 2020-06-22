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


    const showAllButton = document.getElementById("show-all")
    const result = document.querySelector(".result")

    showAllButton.addEventListener("click", () => {
        savedSits = [...document.querySelectorAll("#Bombardier > .col--pick")]

        savedSits = savedSits.map((sit) => sit.attributes.id.textContent.replace('bombSeat', ''))

        if (savedSits.length > 0) {
            localStorage.setItem('savedSits', savedSits);
        }

        const x = localStorage.getItem('savedSits')
        result.innerHTML = `to sa moje siedzenia ${x}`;

    })

}

document.addEventListener("DOMContentLoaded", miejsca);